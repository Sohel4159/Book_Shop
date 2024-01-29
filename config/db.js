// const mongoose = require('mongoose');
// require('dotenv').config();
// console.log(process.env.SESSION_SECRET);

// module.exports = async function () {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
    
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false
//     });
//     console.log(`Database Connected (${conn.connection.name}): ${conn.connection.host}`);
//   } catch (e) {
//     console.log(e);
//   }
// };

const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: false
    });
    console.log(`Database Connected (${conn.connection.name}): ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process on connection error
  }
};



