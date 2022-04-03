// mongoose connect 
const mongoose = require('mongoose');
const connectDB = (conncetionStr) => {
    return mongoose.connect(conncetionStr);
}
module.exports = connectDB;