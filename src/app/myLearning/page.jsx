import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Link from 'next/link'


export const courseContent = [
    {
        href: "https://apbhacademy.com/course-lesson?c=49&uvid=8850148",
        thumbnail: "https://img.youtube.com/vi/CDYFwIsWIg8/0.jpg",
        title: "Video 1 - Introduction to wall covering & Pitching them to the customer",
        progress: 50,
        status: "Done",
        video: "CDYFwIsWIg8",
        decr: "Learn about wallpaper application and beautify your customers' homes",
        name:"Wallpaper"
    },
];

const page = () => {
    return (
        <>
        <div className="bg-purple-50 dark:bg-customDark lg:h-[90vh] h-[100vh]">
            <h1 className="flex text-3xl lg:pt-5 pt-[7rem] items-center justify-center">My learning</h1>
            <div className=' flex mt-[3rem] items-center justify-center'>
                <Tabs defaultValue="courses" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="courses">All Acourses</TabsTrigger>
                        <TabsTrigger value="Complete">Complete</TabsTrigger>
                        <TabsTrigger value="myWishList">Wishlist</TabsTrigger>
                    </TabsList>
                    <TabsContent value="courses">
                        {
                            courseContent.length > 0 ? courseContent.map((items, index) => {
                                return (
                                    <div key={index} className="ml-[2rem]" style={{ transform: 'scale(0.8)', transformOrigin: 'top left' }}>
                                        <div className="max-w-sm rounded overflow-hidden shadow-lg ml-1 dark:border">
                                            <img
                                                className="w-full"
                                                src={items.thumbnail}
                                                alt="Sunset in the mountains"
                                                style={{ height: "200px" }}
                                            />
                                            <div className="px-6 py-4">
                                                <div className="text-[20px] font-semibold">Wallpaper</div>
                                                <div className="font-medium text-[15px] mt-3 mb-2">{items.decr}</div>
                                                <span>
                                                    <Progress value={items.progress} className="mt-5" />
                                                    <span><p>{items.progress}%</p></span>
                                                    <div className="justify-end flex">
                                                        <Link href='/courseStart'><Button >Continue</Button></Link>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="px-6 pt-4 pb-2">
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : <p className="text-center mt-10">You have not Enrolled any courses yet.</p>
                        }
                    </TabsContent>

                    <TabsContent value="Complete">
                        <p className="text-center mt-10">You have not completed any courses yet.</p>
                    </TabsContent>

                    <TabsContent value="myWishList">
                        <p className="text-center mt-10">You have not any wishlist yet.</p>
                    </TabsContent>

                </Tabs>
            </div>
            </div>
        </>

    )
}

export default page