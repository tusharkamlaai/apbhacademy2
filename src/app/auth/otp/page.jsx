'use client'

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const page = () => {
    return (
        <>
            <div className="flex justify-center text-center py-10">
                <Card className="w-[500px]">
                    <CardHeader >
                        <CardTitle className="py-3">Mobile Number Verification</CardTitle>
                        <CardDescription >We've sent a 4 digit OTP to your mobile number +91**********</CardDescription>
                    </CardHeader>
                    <CardContent className="justify-center flex mt-5">
                        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                            </InputOTPGroup>
                        </InputOTP>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <Button>Submit</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default page