import { urlencoded } from "express";
import { model, Schema } from "mongoose";

const  fileSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    url: {type: String, required: true},
    description: { type: String, required: true },
    proyects: { type: Schema.Types.ObjectId, ref: 'proyect' }


})

const fileModel = model('File', commentSchema)
export default fileModel