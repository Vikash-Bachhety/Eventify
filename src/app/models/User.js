import mongoose from "mongoose";

// User Schema
const userSchema = mongoose.Schema({
    accountType: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        unique: true,
        required: true,
    },
    ageGroup: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    registeredEvents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "registerevents",
        },
    ],
}, {
    timestamps: true,
});

const Users = mongoose.models.users || mongoose.model("users", userSchema);
export default Users;