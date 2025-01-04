import { NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import Users from "@/app/models/User";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";

export async function POST(request) {
    await dbConnection();

    try {
        const body = await request.json();
        const { email, password } = body;
        // console.log(body);

        const user = await Users.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { message: "User not registered yet" },
                { status: 400 }
            );
        }

        if (!user.password) {
            return NextResponse.json(
                { message: "Password is not set for this user" },
                { status: 400 }
            );
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return NextResponse.json(
                { message: "Password not matched" },
                { status: 401 }
            );
        }
        const token = createToken(user);
        return NextResponse.json({
            message: "User successfully logged in",
            data: token
        });

    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
