import express from "express";
import upload from "../middleware/multer.js"
import { addDoctor, allDoctors, loginAdmin } from "../controllers/adminController.js";
import authAdmin from "../middleware/authAdmin.js";
import { changeAvailability } from "../controllers/doctorController.js";


const adminRouter = express.Router();

adminRouter.post('/add-doctor', authAdmin, upload.single("image"), addDoctor)
adminRouter.post('/login', loginAdmin)
adminRouter.get('/all-doctors', authAdmin, allDoctors)
adminRouter.post('/change-availability', authAdmin, changeAvailability)


export default adminRouter;