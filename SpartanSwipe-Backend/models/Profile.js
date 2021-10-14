const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({ 
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    },
    major: {
        type: String,
        required: true
    },
    hobbies: {
        type: [String],
        required: true
    },
    bio: {
        type: String
    },
    skills: {
        type: [String],
        required: true
    },
    social: {
        facebook: {
            type: String
        },
        discord: {
            type: String
        },
        linkedin: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
    /*
    experience: [
        {
            title: {
                type: String,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            location: {
                type: String
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],
    */
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);