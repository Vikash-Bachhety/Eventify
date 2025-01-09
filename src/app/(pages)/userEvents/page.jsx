"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/typography";
import { ScaleLoader } from "react-spinners";
import { format } from "date-fns";

const Page = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user ID from token
  useEffect(() => {
    const fetchUser = () => {
      try {
        const token = sessionStorage.getItem("token");
        if (token) {
          const decoded = jwtDecode(token);
          if (decoded.user && decoded.user._id) {
            setUser(decoded.user._id);
          } else {
            console.error("Decoded token does not contain user ID");
          }
        }
      } catch (error) {
        console.error("Invalid or missing token:", error);
      }
    };
    fetchUser();
  }, []);

  // Fetch user's registered events
  useEffect(() => {
    const fetchUserEvents = async () => {
      if (user) {
        try {
          const response = await axios.get(`/api/events/userEvents?user=${user}`);
          setUserData(response.data.data);
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
    <div className="min-h-screen py-10">
      <div className="flex flex-col justify-center items-center mx-auto px-10 mt-24">
        <TypographyH2 className="text-center text-3xl text-white font-bold mb-12">
          Your Registered Events
        </TypographyH2>

        {/* Show loading spinner if still fetching data */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[500px]">
            <ScaleLoader color="#ffffff" height={80} width={20} margin={8} radius={10} loading={loading} size={50} />
          </div>
        ) : userData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {userData.map((data) => (
              <Card key={data._id} className="bg-white text-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={data.eventImage || "https://via.placeholder.com/300"}
                    alt={data.eventName}
                    className="w-full h-60 object-cover rounded-md"
                  />
                  <CardTitle className="text-lg font-thin mt-4">{data.event}</CardTitle>
                  <CardDescription className="text-xs">
                    Registered on: {format(new Date(data.createdAt), "dd MMM yyyy")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2 text-sm">
                  <p>
                    <span className="font-semibold">Name:</span> {data.name}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> {data.email}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> {data.phone}
                  </p>
                  <p>
                    <span className="font-semibold">City:</span> {data.city}
                  </p>
                  <p>
                    <span className="font-semibold">Age:</span> {data.age}
                  </p>
                  <p>
                    <span className="font-semibold">Gender:</span> {data.gender}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-white text-lg mt-8">No events registered yet.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
