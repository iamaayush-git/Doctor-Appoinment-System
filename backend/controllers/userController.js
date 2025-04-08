import validator from "validator"
import bcrypt from "bcrypt"
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"

const registerUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exist"
      })
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter valid email"
      })
    }
    if (!password.length > 8) {
      return res.status(400).json({
        success: false,
        message: "Password can not be less than 8 digits"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new userModel({
      email,
      name,
      password: hashedPassword
    })

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User created Successfully"
    })


  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }

    const user = await userModel.findOne({ email })
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Email or password incorrect"
      })
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Email or password incorrect"
      })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      name: user.name,

    })


  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}

export { registerUser, loginUser }