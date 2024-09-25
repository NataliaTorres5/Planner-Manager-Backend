
import { model, Schema, Types } from "mongoose";

const  commentSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    title: { type: String},
    text: { type: String, required: true },
    proyects: { type: Types.ObjectId, ref: 'proyect' }


})

const commentModel = model('Comment', commentSchema)
export default commentModel