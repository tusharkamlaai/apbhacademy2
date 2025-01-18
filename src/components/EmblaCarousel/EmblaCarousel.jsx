'use client'
import Image from 'next/image'
import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '../../components/EmblaCarousel/EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from '../../components/EmblaCarousel/EmblaCarouselDotButton'
import '../../components/EmblaCarousel/embla.css';

import t1 from '../../app/assets/Training/t1.png';
import t2 from '../../app/assets/Training/t2.png';
import t3 from '../../app/assets/Training/t3.png';
import t4 from '../../app/assets/Training/t4.png';
import t5 from '../../app/assets/Training/t5.png';

const images = [
    { src: t1, alt: 'Training Image 1' },
    { src: t2, alt: 'Training Image 2' },
    { src: t3, alt: 'Training Image 3' },
    { src: t4, alt: 'Training Image 4' },
    { src: t5, alt: 'Training Image 5' },
];


const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max)

const EmblaCarousel = (props) => {
    const { slides, options } = props
    // console.log(slides, "/kkk")

    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const tweenFactor = useRef(0)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenOpacity = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target()

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }

                const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                const opacity = numberWithinRange(tweenValue, 0, 1).toString()
                emblaApi.slideNodes()[slideIndex].style.opacity = opacity
            })
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        setTweenFactor(emblaApi)
        tweenOpacity(emblaApi)
        emblaApi
            .on('reInit', setTweenFactor)
            .on('reInit', tweenOpacity)
            .on('scroll', tweenOpacity)
            .on('slideFocus', tweenOpacity)
    }, [emblaApi, tweenOpacity])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((items, index) => (
                        <div key={index} className="embla__slide relative">
                            <Image
                                src={items.src}
                                alt={items.alt || "Slide Image"}
                                className="embla__slide__img rounded-lg"
                                style={{
                                    height: "100%",
                                }}
                            />
                            <div className="embla__slide__description text-[13px] lg:text-[18px]">
                                {items.description}
                            </div>
                        </div>

                    ))}
                </div>

            </div>
            <div className="embla__controls mt-2">

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>

                <div className="embla__buttons mt-2 ml-2">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel