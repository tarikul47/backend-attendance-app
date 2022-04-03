const {model, Schema} = require("mongoose");

const adminAttendanceSchema = new Schema({
    timelLimit: Number,
    states: String,
    createdAt: Date,
});

const AdminAttendance = model('AdminAttendance','adminAttendanceSchema');
module.exports = AdminAttendance;