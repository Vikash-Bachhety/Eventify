"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TypographyH2, TypographyParagraph } from "@/components/ui/typography";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    // console.log("Contact Form Data:", formData);
    try {
      const response = await axios.post("api/contact", formData);
      const result = await response.data;
      console.log(result)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div className="w-full p-5 min-h-screen overflow-hidden">
      {/* Overlay Effect */}
      <div className="absolute top-0 left-0 w-full h-full"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative">
        {/* Header Section */}
        <div className="text-center mb-12 text-white mt-24">
          <TypographyH2 className="text-4xl font-bold">
            Contact Us
          </TypographyH2>
          <TypographyParagraph className="text-lg mt-4 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.
          </TypographyParagraph>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto bg-white backdrop-blur-sm p-8 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-6">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-2"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="mt-2"
                required
              />
            </div>

            {/* Subject Field */}
            <div className="mb-6">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject of your message"
                className="mt-2"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                rows="5"
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
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="text-center mt-8 text-white animate-bounce">
          <TypographyParagraph className="text-lg mb-4">
            Connect with us on social media
          </TypographyParagraph>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-slate-50"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-slate-50"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-slate-50"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-slate-50"
            >
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
      </div>
      {/* Google Map Section */}
      <div className="h-[500px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093757!2d-122.41941548468134!3d37.774929779759146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f5555555%3A0xf473f473f473f473!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1675789610809!5m2!1sen!2sus"
          className="w-full h-full"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
