import Events from "@/app/models/CreateEvent";
import { dbConnection } from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export async function GET(request) {
  await dbConnection();

  const { searchParams } = new URL(request.url);
  const eventId = searchParams.get("eventId");

  try {
    const event = await Events.findById(eventId);
    if (!event) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }
    return NextResponse.json({ data: event }, { status: 200 });
  } catch (error) {
    console.error("Error fetching event:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching the event." },
      { status: 500 }
    );
  }
}
