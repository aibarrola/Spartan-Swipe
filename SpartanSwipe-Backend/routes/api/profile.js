const { application } = require('express');
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

const { check, validationResult } = require('express-validator');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/me', auth, async (req, res) => {
    try
    {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);
        
        if(!profile)
        {
            return res.status(400).json({ msg: 'There is no profile for this user!'});
        }
        res.json(profile);
    }
    catch(error)
    {
        console.error(error.message);
        res.status(500).send('Server Error');
    }

    //res.send('Profile route')
});

// @route   POST api/profile
// @desc    Create or update user profile
// @access  Private

//middlewares = [auth, validation]
router.post('/', [auth, [
    check('major', 'Major is required').not().isEmpty(),
    check('hobbies', 'Hobbies are required').not().isEmpty(),
    check('skills', 'Skills are required').not().isEmpty(),
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        major,
        hobbies,
        bio,
        skills,
        facebook,
        discord,
        linkedin
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if(major) profileFields.major = major;
    if(hobbies) profileFields.hobbies = hobbies;
    if(bio) profileFields.bio = bio;
    
    if(skills) {
        // split the skills from a list to an array as well as mapping them and applying
        // trimming which trim off spaces (regardless of how many spaces in between)
        profileFields.skills = skills.split(',').map(skill => skill.trim());
    }
 
    // Build social object
    profileFields.social = {}
    if(facebook) profileFields.social.facebook = facebook;
    if(discord) profileFields.social.discord = discord;
    if(linkedin) profileFields.social.linkedin = linkedin;
    
    try
    {
        let profile = await Profile.findOne({ user: req.user.id });
        if(profile)
        {
            //Update the profile
            profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });
            return res.json(profile);
        };

        // Create the profile
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
    }
    catch(error)
    {
        console.error(error.message);
        res.status(500).send('Server Error');
    }

    console.log(profileFields.skills);

    res.send('Hello');

});

// @route   GET api/profile
// @desc    Get all profiles
// @access  Public

router.get('/', async (req, res) => {
    try
    {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    }
    catch(error)
    {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/profile/user/:user_id
// @desc    Get specific profile by user id
// @access  Public

router.get('/user/:user_id', async (req, res) => {
    try
    {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);
        if(!profile)
        {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.json(profile);
    }
    catch(error)
    {
        console.error(error.message);
        if(error.kind == 'ObjectId')
        {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/profile
// @desc    Delete profile, user, and posts (may change posts to messages)
// @access  Private

router.get('/', auth, async (req, res) => {
    try
    {
        // @todo - delete users posts

        
        // Delete profile
        await Profile.findOneAndRemove({ user: req.user.id });

        // Delete user
        await User.findOneAndRemove({ _id: req.user.id });
        res.json({ msg: 'User deleted' });
    }
    catch(error)
    {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;