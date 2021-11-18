import mongoose from "mongoose";

const rolSchema = mongoose.Schema({
    name: String
})

export default mongoose.model("rol",rolSchema);