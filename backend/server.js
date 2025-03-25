import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRouter.js";

// app config
const app = express();
connectDB();
connectCloudinary()

// middlewares
app.use(express.json());
app.use(cors());


// api endpoints
app.use("/api/admin", adminRouter);



app.get('/', (req, res) => {
  res.status(200).send("API working")
})

// server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
})

