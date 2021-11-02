const { application } = require('express');
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
    try
    {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }
    catch(error)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }


    res.send('Auth route')
});

// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post('/', [
    check('email', 'Please enter a valid SJSU email').isEmail(),
    check('password', 'Password is required').exists()
], 
async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()) 
    {
        //(default) status 200 = OK, status 400 = Bad request
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Query with mongoose
    try 
    {
        // See if user exists
        let user = await User.findOne({ email });

        if(!user)
        {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials'}] });
        }

        // Make sure passwords match
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
        {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials'}] });
        }

        // Return jsonwebtoken (get the payload by the user id)
        const payload = {
            user: {
                id: user.id
            }
        }

        // Sign the token
        jwt.sign(payload, config.get('jwtSecret'),
        { expiresIn: 1200 },
        (error, token) => {
            if(error)
            {
                throw error;
            }
            else
            {
                res.json({ token })
            }
        });

        //res.send('User registered');
    }
    catch(error)
    {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;