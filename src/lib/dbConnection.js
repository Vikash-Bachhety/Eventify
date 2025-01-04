import mongoose from "mongoose";

export async function dbConnection() {
    try {
        const connection = await mongoose.connect("mongodb+srv://eventify:eventify123456789@eventify.krex1.mongodb.net/");
        console.log("Database is connected");
    }
    catch (error) {
        console.log(error.message);
    }
}