import doctorModel from "../models/doctorModel.js";

const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;

    const doctor = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, { available: !doctor.available });
    const updatedDoctor = await doctorModel.find();
    res.status(200).json({
      success: true,
      message: "Availability changed",
      doctors: updatedDoctor
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}

export { changeAvailability }