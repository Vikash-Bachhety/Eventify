"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/typography";
import { ScaleLoader } from "react-spinners";

const Page = () => {
    const [user, setUser] = useState("");
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = () => {
            try {
                const token = sessionStorage.getItem("token");
                if (token) {
                    const decoded = jwtDecode(token);
                    setUser(decoded.user._id);
                }
            } catch (error) {
                console.error("Invalid or missing token:", error);
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const fetchUserEvents = async () => {
            if (user) {
                try {
                    const response = await axios.get(`/api/events/userEvents?user=${user}`);
                    setUserData(response.data.data);
                    console.log(response.data.data);
                } catch (error) {
                    console.error("Error fetching user events:", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchUserEvents();
    }, [user]);

    return (
        <div className="min-h-screen bg-gradient-to-b md:pt-32 pt-20 from-violet-400 to-sky-600 py-10">
            <div className="container mx-auto px-4">
                <TypographyH2 className="text-center text-md md:text-3xl text-white mb-8">Your Registered Events</TypographyH2>
                {/* Show loading spinner if still fetching data */}
                {loading ? (
                    <div className="flex justify-center items-center min-h-[600px]">
                        <ScaleLoader color="#ffffff" height={80} width={20} margin={8} radius={10} loading={loading} size={50} />
                    </div>
                ) : (
                    userData.length > 0 ? (
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            {userData.map((data) => (
                                <Card key={data._id} className="shadow-md hover:shadow-lg transition-all border-2">
                                    <CardHeader>
                                        <CardTitle className="text-lg font-bold text-rose-600">{data.name}</CardTitle>
                                        <CardDescription className="text-sm text-gray-500">
                                            Registered for: <span className="font-medium">{data.event}</span>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-gray-600 space-y-2">
                                        <p className="text-sm">
                                            <span className="font-semibold">Email:</span> {data.email}
                                        </p>
                                        <p className="text-sm">
                                            <span className="font-semibold">Phone:</span> {data.phone}
                                        </p>
                                        <p className="text-sm">
                                            <span className="font-semibold">City:</span> {data.city}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-white text-lg mt-8">No events registered.</p>
                    )
                )}
            </div>
        </div>
    );
};

export default Page;
