import mongoose from "mongoose";

const {Schema}=mongoose

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
)

const existingPostModel = mongoose.models["User"];

const User = existingPostModel || mongoose.model("User", userSchema);

export default User;