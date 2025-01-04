import Users from "@/app/models/User.js";
import Events from "@/app/models/CreateEvent";
import RegisterEvents from "@/app/models/EventRegistration";
import { dbConnection } from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export async function GET(request) {
    await dbConnection();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("user");

    try {
        // Fetch the user by ID
        const user = await RegisterEvents.find({ user: userId });
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        return NextResponse.json({ data: user }, { status: 200 });
    } catch (error) {
        console.error("Error fetching event:", error);
        return NextResponse.json(
            { message: "An error occurred while fetching the events." },
            { status: 500 }
        );
    }
}
