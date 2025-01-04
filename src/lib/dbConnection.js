import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export async function dbConnection() {
    try {
        const connection = await mongoose.connect(process.env.DB_URL);
        console.log("Database is connected");
    }
    catch (error) {
        console.log(error.message);
    }
}