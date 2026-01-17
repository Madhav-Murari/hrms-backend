const Attendance = require("../models/Attendance");
const Employee = require("../models/Employee");

exports.markAttendance = async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;

    const employee = await Employee.findOne({ employeeId });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const attendance = await Attendance.create({
      employee: employee._id,
      date,
      status,
    });

    res.status(201).json(attendance);
  } catch (err) {
    console.error("Mark attendance error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAttendanceByEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOne({
      employeeId: req.params.employeeId,
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const records = await Attendance.find({ employee: employee._id });
    res.json(records);
  } catch (err) {
    console.error("Get attendance error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
