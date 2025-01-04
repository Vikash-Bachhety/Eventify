"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypographyH2 } from "@/components/ui/typography";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function LoginForm() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/auth/login', formData);
            const result = await response.data;
            const token = sessionStorage.setItem("token", result.data);
            if (result) {
                router.push("/")
            } else {
                alert("Invalid login credentials.");
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className="flex w-full justify-center items-center min-h-screen bg-gradient-to-r from-teal-500 to-sky-500 ">
            <div className=" w-3/4 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md border">
                <TypographyH2 className="text-center text-xl mb-4">Login</TypographyH2>

                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Login
                    </Button>
                    <p className="text-sm text-blue-500 mt-2">Don't have an Account ? <Link className="text-slate-600 font-medium" href="/register">Signup</Link></p>
                </form>
            </div>
        </div>
    );
}
