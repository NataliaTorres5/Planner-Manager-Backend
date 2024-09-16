import { model, Schema } from "mongoose";

const proyectSchema = new Schema ({

    date: {type: Date, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    user: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    status: { type: String, enum: ['pending', 'in progress', 'completed',], default: 'pending' },
    priority: { type: String, enum: ['normal', 'important', "low"], default: 'normal' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }]

})

const proyectModel = model('proyect', proyectSchema)
export default proyectModel