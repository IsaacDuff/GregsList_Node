
import mongoose from "mongoose";
const Schema = mongoose.Schema

export const HousesSchema = new Schema(
    {
        bedrooms: { type: Number, required: true, min: 1, max: 10 },
        bathrooms: { type: Number, required: true, min: 1, max: 6 },
        levels: { type: Number, required: true, min: 1, max: 4 },
        year: { type: Number, required: true, min: 1800 },
        price: { type: Number, required: true, min: 100000, max: 1000000 },
        description: { type: String, required: true, maxLength: 500 },
        hasYard: { type: Boolean, default: true }
    },

    { timestamps: true }
)





