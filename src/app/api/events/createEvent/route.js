import { NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import Events from "@/app/models/CreateEvent";

export async function POST(request) {
    await dbConnection();

    try {
        const body = await request.json();
        const { eventName, eventType, eventDate, location, organizer, ticketPrice, artists, description, image } = body;

        if (!eventName || !eventType || !eventDate || !location || !organizer || !ticketPrice || !artists || !description || !image) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        const newEvent = await Events.create({
            eventName,
            eventType,
            eventDate,
            location,
            organizer,
            ticketPrice,
            artists,
            description,
            image,
        });

        console.log("Event created successfully:", newEvent);

        return NextResponse.json(
            { message: "Event successfully created", data: newEvent },
            { status: 201 }
        );
    } catch (error) {
        console.log("Error occurred while creating event:", error);

        return NextResponse.json(
            { message: "An error occurred", error: error.message },
            { status: 500 }
        );
    }
}
