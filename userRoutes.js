// const express = require("express");
// const router = express.Router();
// const User = require("../models/user");

// // POST: /api/users/login
// router.post("/login", async (req, res) => {
//   try {
//     // ✅ prevent undefined body crash
//     const { mobile = "", email = "", membership = "" } = req.body || {};

//     // ✅ trim values (important)
//     const cleanMobile = mobile.trim();
//     const cleanEmail = email.trim();
//     const cleanMembership = membership.trim();

//     // ✅ validation
//     if (!cleanMobile && !cleanEmail && !cleanMembership) {
//       return res.status(400).json({
//         message: "Please enter at least one field"
//       });
//     }

//     // ✅ create user
//     const newUser = new User({
//       mobile: cleanMobile,
//       email: cleanEmail,
//       membership: cleanMembership
//     });

//     // ✅ save in DB
//     await newUser.save();

//     return res.status(200).json({
//       message: "User saved successfully"
//     });

//   } catch (err) {
//     console.error("ERROR:", err.message);

//     return res.status(500).json({
//       error: "Internal Server Error"
//     });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
  try {
    const { mobile, email, membership } = req.body;

    const newUser = new User({
      mobile,
      email,
      membership
    });

    await newUser.save();

    res.json({ message: "Saved in MongoDB ✅" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error ❌" });
  }
});

module.exports = router;