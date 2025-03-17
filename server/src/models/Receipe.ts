import mongoose, { Document, Schema } from "mongoose";

export interface IReceipe extends Document {
    title: string;
    description: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    createdBy: mongoose.Types.ObjectId;
    createdAt: Date
}


const ReceipeSchema = new Schema<IReceipe>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


export default mongoose.model<IReceipe>("Receipe", ReceipeSchema)