import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventType: {
        type: String,
        required: true
    },
    eventDate: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    organizer: {
        type: String,
        required: true
    },
    ticketPrice: {
        type: String,
        required: true
    },
    artists: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Events = mongoose.models.events || mongoose.model("events", eventSchema);

export default Events;