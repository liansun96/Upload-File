const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url , {
    connectTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 45000   // 45 seconds
  }) 
}

module.exports = connectDB