import RegisterEvents from "@/app/models/EventRegistration";
import Users from "@/app/models/User";
import { dbConnection } from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export async function POST(request) {
    dbConnection();
    try {
        const body = await request.json();
        const { name, email, phone, age, gender, city, event, userId } = body;

        if (!name || !email || !phone || !age || !gender || !city || !event) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        const existingRegistration = await RegisterEvents.findOne({ email, event });
        if (existingRegistration) {
            return NextResponse.json(
                { message: "You are already registered for this event" },
                { status: 409 }
            );
        }

        const newEventRegister = await RegisterEvents.create({
            name, email, phone, age, gender, city, event, user: userId
        });

        const user = await Users.findById(userId);
        if (user) {
            user.registeredEvents.push(newEventRegister._id);
            await user.save();
        }

        return NextResponse.json(
            {
                message: "Registered successfully for event",
                data: { id: newEventRegister._id, event: newEventRegister.event }
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error during registration:", error);
        return NextResponse.json(
            { message: "Error occurred during registration", error: error.message },
            { status: 500 }
        );
    }
}
