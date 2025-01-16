import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();

export async function POST(req) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  let requestData;

  try {
    requestData = await req.json();
  } catch (error) {
    console.error("Invalid JSON body:", error);
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  const { amount } = requestData;

  if (!amount || isNaN(amount) || amount <= 0) {
    return new Response(
      JSON.stringify({ error: "Invalid amount. Amount must be greater than 0." }),
      { status: 400, headers: corsHeaders }
    );
  }

  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    console.log("Creating Razorpay order for amount:", amount);

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Math.floor(Math.random() * 1000)}`,
      payment_capture: 1,
    };

    const order = await instance.orders.create(options);

    console.log("Order created:", order);

    return new Response(
      JSON.stringify({
        success: true,
        orderId: order.id,
        amount: order.amount / 100,
        currency: order.currency,
        receipt: order.receipt,
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error creating Razorpay order:", error);

    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: corsHeaders }
    );
  }
}
