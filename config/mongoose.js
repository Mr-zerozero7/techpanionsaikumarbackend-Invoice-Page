const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected Successfully...');
    } catch (error) {
        console.log('MongoDB connection Status:',error.message);
        process.exit(1);
    }
}

module.exports = connectDB;