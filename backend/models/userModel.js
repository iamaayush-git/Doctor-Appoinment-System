import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, default: "https://res.cloudinary.com/dq22kyt1k/image/upload/v1742886325/unknown_scd75b.webp" },
  address: { type: String, default: { line1: "", line2: "" } },
  gender: { type: String, default: "Not Selected" },
  dob: { type: String, default: "Not Selected" },
  phone: { type: String, default: "0000000" }
}, { timestamps: true })

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;