const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url , {
    connectTimeoutMS: 40000, // 40 seconds
    socketTimeoutMS: 45000   // 45 seconds
  }) 
}

module.exports = connectDB