import jwt from "jsonwebtoken"
const authAdmin = async (req, res, next) => {
  try {
    const { admintoken } = req.headers
    if (!admintoken) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user"
      })
    }

    const token_decode = jwt.verify(admintoken, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.status(400).json({
        success: false,
        message: "Token doesn't match"
      })
    }

    next();

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}
export default authAdmin;