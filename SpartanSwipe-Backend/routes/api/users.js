const { application } = require('express');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid SJSU email').isEmail(),
    check('password', 'Please enter a password with 8 or more characters').isLength({ min: 8 })
], 
async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()) 
    {
        //(default) status 200 = OK, status 400 = Bad request
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    // Query with mongoose
    try 
    {
        // See if user exists
        let user = await User.findOne({ email });

        if(user)
        {
            return res.status(400).json({ errors: [{ msg: 'User already exists'}] });
        }

        // Get users gravatar
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });
        
        // Creates a new user (but doesn't actually save them into the database)
        user = new User({
            name,
            email,
            avatar, 
            password
        });

        // Encrypt password by hashing
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save the user into the database
        await user.save()

        // Return jsonwebtoken (get the payload by the user id)
        const payload = {
            user: {
                id: user.id
            }
        }

        // Sign the token
        jwt.sign(payload, config.get('jwtSecret'),
        { expiresIn: 2400 },
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