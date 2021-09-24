const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

// @route GET api/users
// router.get('/', (req,res) => res.send('User route'));

router.post(
  "/",
  [
    check("firstName", "First name is required").not().isEmpty(),
    check("lastName", "Last name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    console.log(req.body);

    const errors = validationResult(req);
    //if there's something wrong with the user's request
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
        //check if user exists
        let user = await User.findOne({ email });

        //if the user exists in the database
        if(user) {
            res.status(400).json({ errors: [ { msg: 'User aready exists' } ] });
        }

        user = new User({
            firstName,
            lastName,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        res.send("User registered");
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
  }
);

module.exports = router;
