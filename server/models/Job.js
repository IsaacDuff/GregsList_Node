import mongoose from "mongoose";
const Schema = mongoose.Schema

export const JobsSchema = new Schema(
    {
        company: { type: String, required: true, minLength: 3, maxLength: 50 },
        jobTitle: { type: String, required: true, minLength: 3, maxLength: 25 },
        hours: { type: Number, required: true, min: 10 },
        description: { type: String, required: true, minLength: 3, maxLength: 500 }
    }
)
