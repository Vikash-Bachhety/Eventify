"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TypographyH2 } from "@/components/ui/typography";
import Link from "next/link";
import { Switch } from "@/components/ui/switch"
import axios from "axios";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        accountType: "user",
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        phone: "",
        ageGroup: "",
        city: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAccountTypeChange = () => {
        // Toggle between 'user' and 'organizer' when clicked
        setFormData((prevState) => ({
            ...prevState,
            accountType: prevState.accountType === "user" ? "organizer" : "user",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post("api/auth/register", formData);
            const result = response.data;
            console.log(result)
            setFormData({
                accountType: "user",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                gender: "",
                ageGroup: "",
                city: "",
                password: "",
            })
        } catch (error) {
            console.log(error.message)
        }
    };

    return (
        <div className="flex w-full min-h-screen bg-gradient-to-r from-teal-500 to-sky-500 ">
            <div className=" w-11/12 max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-md border">
                <TypographyH2 className="text-center text-2xl mb-4">Sign Up</TypographyH2>

                <form onSubmit={handleSubmit}>
                    {/* Account Type Toggle */}
                    <div className="mb-4 col-span-2">
                        <Label htmlFor="accountType">Account Type</Label>
                        <div className="flex items-center space-x-4">
                            <div
                                className={`relative shadow-md shadow-black inline-block w-16 h-6 rounded-full transition-all ${formData.accountType === "user" ? "bg-blue-500" : "bg-rose-500"
                                    }`}
                                onClick={handleAccountTypeChange}
                            >
                                <div
                                    className={`absolute top-0 w-6 h-6 bg-white rounded-full transition-all ${formData.accountType === "user" ? "translate-x-0" : "translate-x-10"
                                        }`}
                                ></div>
                            </div>
                            <span className={`text-md font-semibold w-auto rounded-md px-2 py-1 text-white ${formData.accountType === "user" ? "bg-blue-500" : "bg-rose-500"}`}>
                                {formData.accountType === "user" ? "User" : "Organizer"}
                            </span>
                        </div>
                    </div>

                    {/* First Name */}
                    <div className="mb-4">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1"
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div className="mb-4">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1"
                            required
                        />
                    </div>

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

                    {/* Phone */}
                    <div className="mb-4">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1"
                            required
                        />
                    </div>

                    {/* Gender */}
                    <div className="mb-4">
                        <Label>Gender</Label>
                        <RadioGroup
                            value={formData.gender}
                            onValueChange={(value) => setFormData({ ...formData, gender: value })}
                            className="flex space-x-4 mt-1 items-center"
                        >
                            <RadioGroupItem id="male" value="Male" label="Male" />Male
                            <RadioGroupItem id="female" value="Female" label="Female" />Female
                            <RadioGroupItem id="other" value="Other" label="Other" />Other
                        </RadioGroup>
                    </div>

                    {/* Age Group */}
                    <div className="mb-4">
                        <Label htmlFor="ageGroup">Age Group</Label>
                        <Select
                            value={formData.ageGroup}
                            onValueChange={(value) => setFormData({ ...formData, ageGroup: value })}
                            className="mt-1"
                        >
                            <SelectTrigger className="w-full">
                                <span>{formData.ageGroup || "Select Age Group"}</span>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="18-25">18-25</SelectItem>
                                <SelectItem value="26-35">26-35</SelectItem>
                                <SelectItem value="36-45">36-45</SelectItem>
                                <SelectItem value="46+">46+</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* City */}
                    <div className="mb-4">
                        <Label htmlFor="city">City</Label>
                        <Input
                            id="city"
                            name="city"
                            type="text"
                            value={formData.city}
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
                    <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        Register
                    </Button>
                    <p className="text-sm text-blue-500 mt-2">Already have an Account ! <Link className="text-slate-600 font-medium" href="/login">Signin</Link></p>

                </form>
            </div>
        </div>
    );
}
