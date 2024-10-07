import { model, Schema, Types } from "mongoose";

const proyectSchema = new Schema ({

    date: {type: Date, default: Date.now},
    name: {type: String, required: true},
    description: {type: String, required: true},
    user: { type: Types.ObjectId, ref: "user" },
    status: { type: String, enum: ['pending', 'in_progress', 'completed',], default: 'pending' },
    priority: { type: String, enum: ['normal', 'important', "low"], default: 'normal' },
})

const proyectModel = model('proyect', proyectSchema)
export default proyectModel