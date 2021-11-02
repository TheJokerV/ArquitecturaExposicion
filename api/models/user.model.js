import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    lastName: String,
    username: String,
    addres: String,
    age: Number

})

export default mongoose.model("user",userSchema);