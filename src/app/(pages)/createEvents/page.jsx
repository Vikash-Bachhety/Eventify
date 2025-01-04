"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { TypographyH2, TypographyParagraph } from "@/components/ui/typography";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import axios from "axios";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

export default function CreateEventPage() {
  const router = useRouter();
  const [accountType, setUserAccount] = useState("");
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    eventDate: "",
    location: "",
    organizer: "",
    ticketPrice: "",
    artists: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    try {
      if (!token) {
        router.push("/login")
      }
      else {
        const decoded = jwtDecode(token);
        setUserAccount(decoded.user.accountType);
      }
    } catch (error) {
      console.error("Invalid or missing token:", error);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.eventName ||
      !formData.eventType ||
      !formData.eventDate ||
      !formData.location ||
      !formData.organizer ||
      !formData.ticketPrice ||
      !formData.description ||
      !formData.image
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const response = await axios.post("api/events/createEvent", formData)
      const result = await response.data;
      console.log(result)
      setFormData({
        eventName: "",
        eventType: "",
        eventDate: "",
        location: "",
        organizer: "",
        ticketPrice: "",
        description: "",
        image: "",
      })
    } catch (error) {
      console.log(error)
    }

    console.log("Event Details:", formData);
  };

  return (
    <div className="py-16 bg-gradient-to-r from-teal-500 to-sky-500">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mt-10">
        {/* Header Section */}
        <div className="text-center">
          <TypographyH2 className="text-4xl font-bold text-white">
            Create New Event
          </TypographyH2>
          <TypographyParagraph className="text-lg text-gray-50 mt-4 max-w-2xl mx-auto">
            Fill out the details below to add a new event to the platform. Make
            sure to provide accurate and complete information.
          </TypographyParagraph>
        </div>

        {/* Video Playback Section */}
        <div className="mb-12 ">
          <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg shadow-md">
            <iframe
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
              src="https://www.youtube.com/embed/MuTh3_TkAHw?autoplay=1&loop=1&mute=1&playlist=MuTh3_TkAHw"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit}>
            {/* Event Name */}
            <div className="mb-6">
              <Label htmlFor="eventName">Event Name</Label>
              <Input
                id="eventName"
                name="eventName"
                type="text"
                value={formData.eventName}
                onChange={handleChange}
                placeholder="Enter the event name"
                className="mt-2"
                required
              />
            </div>

            {/* Event Type */}
            <div className="mb-6">
              <Label htmlFor="eventType">Event Type</Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, eventType: value })
                }
                required
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="concert">Concert</SelectItem>
                  <SelectItem value="seminar">Seminar</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="festival">Festival</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Event Date */}
            <div className="mb-6">
              <Label htmlFor="eventDate">Event Date</Label>
              <div className="border p-2 rounded-md mt-2">
                <Calendar
                  mode="single"
                  selected={
                    formData.eventDate ? new Date(formData.eventDate) : null
                  }
                  onSelect={(date) =>
                    setFormData({
                      ...formData,
                      eventDate: format(date, "yyyy-MM-dd"),
                    })
                  }
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter the event location"
                className="mt-2"
                required
              />
            </div>

            {/* Organizer */}
            <div className="mb-6">
              <Label htmlFor="organizer">Organizer Name</Label>
              <Input
                id="organizer"
                name="organizer"
                type="text"
                value={formData.organizer}
                onChange={handleChange}
                placeholder="Enter the organizer's name"
                className="mt-2"
                required
              />
            </div>

            {/* Ticket Price */}
            <div className="mb-6">
              <Label htmlFor="ticketPrice">Ticket Price (in Rupees)</Label>
              <Input
                id="ticketPrice"
                name="ticketPrice"
                type="number"
                value={formData.ticketPrice}
                onChange={handleChange}
                placeholder="Enter ticket price"
                className="mt-2"
                required
              />
            </div>

            {/* Artists */}
            <div className="mb-6">
              <Label htmlFor="artists">Artists</Label>
              <Input
                id="artists"
                name="artists"
                type="text"
                value={formData.artists}
                onChange={handleChange}
                placeholder="Enter artists name"
                className="mt-2"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <Label htmlFor="description">Event Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide a brief description of the event"
                rows="5"
                className="mt-2"
                required
              />
            </div>

            {/* Image Upload */}
            <div className="mb-6">
              <Label htmlFor="image">Event Image</Label>
              <Input
                id="image"
                name="image"
                type="text"
                onChange={handleChange}
                className="mt-2"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Create Event
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
