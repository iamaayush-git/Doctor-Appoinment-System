import mongoose from "mongoose"

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URI).then(() => console.log("successfully connected to database")).catch((error) => console.log(error.message))
}
export default connectDB