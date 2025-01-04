import { NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import Users from "@/app/models/User";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export async function POST(request) {
  await dbConnection();

  try {
    const body = await request.json();
    const { accountType, firstName, lastName, email, phone, gender, ageGroup, city, password } = body;

    // Check if user already exists
    const user = await Users.findOne({ $or: [{ email }, { phone }] });
    if (user) {
      return NextResponse.json(
        { message: "User already registered" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await Users.create({
      accountType,
      firstName,
      lastName,
      email,
      phone,
      gender,
      ageGroup,
      city,
      password: hashPassword
    });

    // Create a token
    const token = createToken(newUser);

    // Send confirmation email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "bachhetyv@gmail.com",
      to: email,
      subject: "Welcome to Eventify!",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f4f4f9; border: 1px solid #ddd; border-radius: 10px;">
        <!-- Header Section -->
        <div style="text-align: center; padding: 20px;">
          <img src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Welcome" style="border-radius: 50%; width: 100px; height: 100px;">
          <h1 style="color: #333; font-size: 24px; margin-top: 20px;">Welcome to Eventify!</h1>
        </div>

        <!-- Message Section -->
        <div style="padding: 20px; background-color: #fff; border-radius: 10px;">
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            Hi <strong>${firstName}</strong>,<br><br>
            We’re so excited to have you join our community of event enthusiasts and organizers! 🎉
            At <strong>Eventify</strong>, we aim to make event planning and ticketing seamless and enjoyable.
          </p>
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            Explore amazing events, connect with like-minded individuals, or create your own events with ease.
          </p>
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            Here's to creating unforgettable memories together. 🌟
          </p>
        </div>

        <!-- Footer Section -->
        <div style="text-align: center; margin-top: 20px;">
          <p style="color: #888; font-size: 14px;">
            Cheers,<br>
            <strong>The Eventify Team</strong>
          </p>
          <a href="https://eventifymanagement-web.vercel.app/" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #4CAF50; color: #fff; text-decoration: none; border-radius: 5px;">Visit Eventify</a>
        </div>
      </div>
    `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "User successfully registered. Confirmation email sent.",
      data: token,
    });

  } catch (error) {
    console.error("Error during registration:", error.message);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
