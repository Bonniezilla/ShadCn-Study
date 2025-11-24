'use client'

import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';
import { useForm } from 'react-hook-form'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authLogin } from "@/lib/utils"

// Form validation
const formSchema = z.object({
    email: z.email(),
    password: z.string().min(3),
})

type loginFormData = z.infer<typeof formSchema>

export default function LoginCard() {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
    })

    async function onSubmit(data: loginFormData) {
        try {
            setLoading(true)
            const response = await authLogin(data.email, data.password)
            console.log("Success: ", response)
        } catch (error) {
            console.log("Error:", error)
        } finally {
            setLoading(false)
        }
}

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
                <CardAction>
                    <Button variant="default">Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} id='login-form'>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className='text-destructive text-sm'>{errors.email.message}</p>
                            )}
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                            <Input id="password" type="password" required {...register('password')}/>
                            {errors.password && (
                                <p className='text-destructive text-sm'>{errors.password.message}</p>
                            )}
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button disabled={loading} type="submit" form='login-form' className="w-full">
                    { loading ? "Loading" : "Login"}
                </Button>
                <Button variant="outline" className="w-full">
                    Login with Google
                </Button>
            </CardFooter>
        </Card>
    )
}