const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({ 
    members: {
        type: Array
    },
}, {timestamps: true});

module.exports = Chat = mongoose.model('chat', ChatSchema);