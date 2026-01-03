import { Schema, model, Document } from "mongoose";

interface IWaitlist extends Document {
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

const waitlistSchema = new Schema<IWaitlist>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

const Waitlist = model<IWaitlist>('Waitlist', waitlistSchema);

export default Waitlist;