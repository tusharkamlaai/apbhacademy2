import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import Link from 'next/link'


const page = () => {
    return (
        <>
            <div className="flex justify-center items-center mt-32">
                <Card className="lg:w-[400px] w-[90%] shadow-lg rounded-lg">
                    <CardHeader>
                        <CardTitle className="text-center text-xl font-bold mt-5">
                            Register
                        </CardTitle>
                        <p className="text-center text-sm text-gray-500 mt-2">
                            Please enter your below details
                        </p>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-6">
                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="phone" className="text-sm dark:text-white font-medium text-gray-700">
                                        Name:
                                    </Label>
                                    <Input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="phone" className="text-sm dark:text-white font-medium text-gray-700">
                                        Profession:
                                    </Label>
                                    <Input
                                        type="text"
                                        placeholder="Enter your profession"
                                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="phone" className="text-sm dark:text-white font-medium text-gray-700">
                                        Phone:
                                    </Label>
                                    <Input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="phone" className="text-sm dark:text-white font-medium text-gray-700">
                                        Password:
                                    </Label>
                                    <Input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center mt-5">
                        <Button
                            variant="outline"
                            className="w-[15rem] bg-purple-50 h-[3rem] dark:text-black dark:hover:text-white"
                        >
                            Submit
                        </Button>
                        <div className="mt-4 text-sm text-gray-500">
                            Already have an account?{' '}
                            <Link href="/auth/login" className="text-purple-600 hover:underline">
                                Login
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default page
