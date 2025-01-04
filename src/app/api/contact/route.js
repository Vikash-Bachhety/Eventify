import { NextResponse } from "next/server";
import Contacts from "@/app/models/Contact";
import { dbConnection } from "@/lib/dbConnection";

export async function POST(request) {
    await dbConnection();
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        console.log("Received request body:", body);

        const newMessage = await Contacts.create({
            name,
            email,
            subject,
            message,
        });

        console.log(newMessage)

        return NextResponse.json(
            { message: "Message successfully sent", data: newMessage },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error occurred:", error);
        return NextResponse.json(
            { message: "An error occurred", error: error.message },
            { status: 500 }
        );
    }
}
