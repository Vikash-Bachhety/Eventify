"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const EventDetailsPage = () => {
    const [event, setEvent] = useState(null);
    const params = useParams();

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const response = await axios.get(`/api/events/artistEvent?artistName=${params.artistName.split('%20').join(' ')}`);
                const result = response.data.data;
                setEvent(result);
            } catch (error) {
                console.error("Error fetching event details:", error.message);
            }
        };
        fetchEventDetails();
    }, [params.eventId]);

    if (!event) {
        return <div className="text-center py-10">Loading event details...</div>;
    }

    return (
        <div className="mx-auto w-full p-20 bg-gradient-to-r from-teal-500 to-sky-500">
            <div className="bg-white shadow-md rounded-lg p-6">
                {/* Event Image */}
                <div className="mb-4">
                    <img
                        src={event.image}
                        alt={event.eventName}
                        className="w-full h-[600px] object-cover object-top rounded-lg"
                    />
                </div>

                {/* Event Details */}
                <div className="text-center">
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
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                    <Link
                        href={`/bookTicket/${params.eventId}`}
                        className="bg-rose-600 text-white hover:bg-rose-700 px-4 py-2 rounded-md"
                    >
                        Book Tickets
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsPage;
