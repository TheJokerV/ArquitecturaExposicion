import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    cost: Number,
    imgURL: String

})

export default mongoose.model("product",productSchema);