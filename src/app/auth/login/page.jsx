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

const LoginPage = () => {
    return (
        <>
            <div className="flex justify-center items-center mt-56 ">
                <Card className="lg:w-[400px] w-[90%] shadow-lg rounded-lg">
                    <CardHeader>
                        <CardTitle className="text-center text-xl font-bold mt-5">
                            Login with Phone Number
                        </CardTitle>
                        <p className="text-center text-sm text-gray-500 mt-2">
                            Please enter your phone number to continue
                        </p>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-6 mt-5">
                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                        Phone:
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center mt-5">
                        <Button
                            variant="outline"
                            className="w-[15rem] bg-purple-50 h-[3rem]"
                        >
                            Submit
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default LoginPage
