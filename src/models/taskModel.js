
import { model, Schema, Types } from "mongoose";

const  taskSchema = new Schema({
    user: { type: Types.ObjectId, ref: 'user' },
    date: {type: Date, default: Date.now},
    title: { type: String},
    text: { type: String, required: true },
    proyects: { type: Types.ObjectId, ref: 'proyect' },
    status: { type: String, enum: ['pending', 'in progress', 'completed',], default: 'pending' },
    priority: { type: String, enum: ['normal', 'important', "low"], default: 'normal' },


})

const taskModel = model('Task', taskSchema)
export default taskModel