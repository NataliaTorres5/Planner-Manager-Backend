import { model, Schema } from "mongoose";

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    proyect: [{ type: Schema.Types.ObjectId, ref: 'proyect' }],
    role: { type: String, enum: ['admin', 'user', 'organizer'], default: 'user' },
    logged: { type:Boolean, required: true, default:false }
})

const userModel = model('User', userSchema)
export default userModel