import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();

export async function POST(req) {
  let requestData;

  // Safely parse the request body
  try {
    requestData = await req.json();
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400 });
  }

  const { amount } = requestData; // Amount should be in INR (e.g., 100 for ₹1)

  // Validate amount
  if (!amount || isNaN(amount) || amount <= 0) {
    return new Response(
      JSON.stringify({ error: "Invalid amount. Amount must be greater than 0." }),
      { status: 400 }
    );
  }

  // Initialize Razorpay instance
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    // Create an order
    const options = {
      amount: amount * 100, // Razorpay expects the amount in paise (₹1 = 100 paise)
      currency: "INR",
      receipt: `receipt_${Math.floor(Math.random() * 1000)}`,
      payment_capture: 1, // Automatically capture payment after order creation
    };

    const order = await instance.orders.create(options);

    // Return the order details
    return new Response(
      JSON.stringify({
        success: true,
        orderId: order.id,
        amount: order.amount / 100, // Convert back to INR for frontend display
        currency: order.currency,
        receipt: order.receipt,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
