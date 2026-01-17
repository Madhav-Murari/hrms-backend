const Attendance = require("../models/Attendance");
const Employee = require("../models/Employee");

exports.markAttendance = async (req, res) => {
  const { employeeId, date, status } = req.body;

  const employee = await Employee.findOne({ employeeId });
  if (!employee) return res.status(404).json({ message: "Employee not found" });

  const attendance = await Attendance.create({
    employee: employee._id,
    date,
    status,
  });

  res.status(201).json(attendance);
};

exports.getAttendanceByEmployee = async (req, res) => {
  const employee = await Employee.findOne({ employeeId: req.params.employeeId });
  const records = await Attendance.find({ employee: employee._id });
  res.json(records);
};
