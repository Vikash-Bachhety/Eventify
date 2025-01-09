import crypto from "crypto";
import Users from "@/app/models/User";
import RegisterEvents from "@/app/models/EventRegistration";
import Events from "@/app/models/CreateEvent";
import dotenv from "dotenv";
dotenv.config();

export async function POST(req) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, eventId, } = await req.json();

  const secret = process.env.RAZORPAY_KEY_SECRET;

  try {
    // Create the expected signature
    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    // Compare the generated signature with the received signature
    if (generated_signature === razorpay_signature) {

      const user = await Users.findById(userId);
      const event = await Events.findById(eventId);

      if (!event) {
        return new Response(JSON.stringify({ success: false, error: "Event not found" }), { status: 404 });
      }
      if (user) {
        const newEventRegister = await RegisterEvents.create({
          eventName: event.eventName,
          eventDate: event.eventDate,
          eventImage: event.image,
          eventPrice: event.ticketPrice,
          eventLocation: event.location,
          eventArtist: event.artists,
          name: user.firstName,
          email: user.email,
          phone: user.phone,
          age: user.ageGroup,
          gender: user.gender,
          city: user.city,
          event: event.eventName,
          user: user._id
        })
        // Update the user's event registration
        user.registeredEvents.push(newEventRegister._id);
        await user.save();
        // Payment is verified
        return new Response(JSON.stringify({ success: true }), { status: 200 });
      }
    } else {
      // Verification failed
      return new Response(JSON.stringify({ success: false, error: "Verification failed" }), { status: 400 });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}