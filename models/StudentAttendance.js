const {model, Schema} = require("mongoose");
const User = require("./User");

const StudentAttendanceSchema = new Schema({
    createdAt: Date,
    user:{
        type: Schema.Types.ObjectId,
        ref: User,
    },
    adminAttendance: {
        type: Schema.Types.ObjectId,
        ref: 'AdminAttendance'
    }

});

const StudentAttendance = model('StudentAttendance','StudentAttendanceSchema');
module.exports = StudentAttendance;