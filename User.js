// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     mobile: {
//       type: String,
//       trim: true,
//       default: ""
//     },
//     email: {
//       type: String,
//       trim: true,
//       lowercase: true,
//       default: ""
//     },
//     membership: {
//       type: String,
//       trim: true,
//       default: ""
//     }
//   },
//   {
//     timestamps: true // adds createdAt & updatedAt
//   }
// );

// module.exports = mongoose.model("User", userSchema);


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  mobile: String,
  email: String,
  membership: String
});

module.exports = mongoose.model("User", userSchema);