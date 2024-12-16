import mongoose, { model, Schema, Types } from "mongoose";

const usermodel = new Schema({
    username: {
        type: 'string',
        required: true,
        unique: true
    },
    email: { type: 'string', required: true },
    password: { type: 'string', required: true }
})

export const UserModel = model("User", usermodel);

// *****************************//

const contentTypes = ['Youtube','Twitter']; // Extend as needed

const contentSchema = new Schema({
    link: { type: String, required: true },
    type: { type: String, enum: contentTypes, required: true },
    title: { type: String, required: true },
    tags: [{ type: Types.ObjectId, ref: 'Tag' }],
    userId: { type: Types.ObjectId, ref: 'User', required: true },
});

export const contentmodel = model("Content", contentSchema);

// ********************************************//

const tagSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true }
});

export const tagmodel = model("Tag", tagSchema);

// ********************************************//

const linkSchema = new mongoose.Schema({
    hash: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export const linkmodel = model("linkSchema", linkSchema)