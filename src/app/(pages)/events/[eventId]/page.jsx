"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { jwtDecode } from "jwt-decode";

const EventDetailsPage = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const params = useParams();
  const [userId, setUserId] = useState();

  const eventId = params.eventId;
   useEffect(() => {
      try {
        const token = sessionStorage.getItem("token");
        if (token) {
          const decoded = jwtDecode(token);
          setUserId(decoded.user._id);
        }
      } catch (error) {
        console.error("Invalid or missing token:", error);
      }
    }, []);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`/api/events/eventDetails?eventId=${eventId}`);
        const result = response.data.data;
        setEvent(result);
      } catch (error) {
        console.error("Error fetching event details:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEventDetails();
  }, [params.eventId]);

  // Dynamically load Razorpay script
  useEffect(() => {
    const loadRazorpayScript = () => {
      if (typeof window !== "undefined" && !window.Razorpay) {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => setRazorpayLoaded(true);
        script.onerror = () => console.error("Failed to load Razorpay script");
        document.body.appendChild(script);
      } else {
        setRazorpayLoaded(true);
      }
    };
    loadRazorpayScript();
  }, []);

  // Function to handle Razorpay payment
  const handlePayment = async () => {
    if (!razorpayLoaded) {
      alert("Razorpay is still loading. Please try again shortly.");
      return;
    }
    try {
      // Request an order creation from the server
      const { data } = await axios.post("/api/razorpay", {
        amount: event.ticketPrice,
      });

      // Initialize Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Your Razorpay Key ID
        amount: event.ticketPrice * 100, // Amount in paise
        currency: "INR",
        order_id: data.orderId, // The order ID returned from your server
        name: event.eventName,
        description: event.eventType,
        image: event.image,
        handler: async function (response) {
          try {
            // Send payment details to the server for verification
            const verifyResponse = await axios.post("/api/verify-payment", {
              userId,
              eventId,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verifyResponse.data.success) {
              alert("Payment successful and verified!");
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (error) {
            console.error("Error verifying payment:", error);
            alert("Error verifying payment.");
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          address: "address for this order",
        },
        theme: {
          color: "#305dff",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      console.log(rzp)
    } catch (error) {
      console.error("Error initiating Razorpay payment:", error);
      alert("Error initiating payment");
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen px-6 py-28">
      {loading ? (
        <div className="flex justify-center items-center min-h-[600px]">
          <ScaleLoader color="#ffffff" height={80} width={20} margin={8} radius={10} loading={loading} size={50} />
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-2 w-full md:w-11/12 lg:w-2/3 xl:w-1/2 flex flex-col md:flex-row">
          <div className="mb-4 md:mb-0 md:w-1/2">
            <img
              src={event.image}
              alt={event.eventName}
              className="w-full h-[300px] md:h-[500px] object-cover object-top rounded-lg"
            />
          </div>
          <div className="text-center md:text-left md:w-1/2 md:pl-8 flex flex-col justify-center">
            <h1 className="text-md lg:text-3xl font-bold mb-4">{event.eventName}</h1>
            <p className="text-gray-600 italic mb-4">{event.eventType}</p>
            <p className="text-gray-800 mb-4">
              <strong>Date:</strong> {event.eventDate}
            </p>
            <p className="text-gray-800 mb-4">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="text-gray-800 mb-4">
              <strong>Organizer:</strong> {event.organizer}
            </p>
            <p className="text-gray-800 mb-4">
              <strong>Ticket Price:</strong> ₹{event.ticketPrice}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">{event.description}</p>
            <button
              onClick={handlePayment}
              className="text-center bg-rose-600 text-white hover:bg-rose-700 px-4 py-2 rounded-md"
            >
              Book Tickets
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetailsPage;
