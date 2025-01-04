"use client"

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import Link from "next/link";

const EventDetailsPage = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`/api/events/eventDetails?eventId=${params.eventId}`);
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

  return (
    <div className="w-full flex justify-center p-5 md:p-20 bg-gradient-to-r from-teal-500 to-sky-500">

      {/* Show loading spinner if still fetching data */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[600px]">
          <ScaleLoader color="#ffffff" height={80} width={20} margin={8} radius={10} loading={loading} size={50} />
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-2 w-full md:w-2/3 flex flex-col md:flex-row mt-20">
          {/* Event Image */}
          <div className="mb-4 md:mb-0 md:w-1/2">
            <img
              src={event.image}
              alt={event.eventName}
              className="w-full h-[300px] md:h-[500px] object-cover object-top rounded-lg"
            />
          </div>

          {/* Event Details */}
          <div className="text-center md:text-left md:w-1/2 md:pl-8 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">{event.eventName}</h1>
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
            <Link
              href={`/bookTicket/${params.eventId}`}
              className="text-center bg-rose-600 text-white hover:bg-rose-700 px-4 py-2 rounded-md"
            >
              Book Tickets
            </Link>
          </div>
        </div>)}
    </div>
  );
};

export default EventDetailsPage;