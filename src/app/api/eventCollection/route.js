import Events from "@/app/models/CreateEvent";
import { dbConnection } from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnection();

  try {
    const events = await Events.find({});
    return NextResponse.json(
      { data: events },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching events." },
      { status: 500 }
    );
  }
}
