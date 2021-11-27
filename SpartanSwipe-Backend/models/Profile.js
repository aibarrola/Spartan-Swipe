const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({ 
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    },
    department: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    degrees: {
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
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);