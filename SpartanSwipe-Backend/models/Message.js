const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({ 
    chatId: {
        type: String
    },
    sender: {
        type: String
    },
    text: {
        type: String
    },
}, {timestamps: true});

module.exports = Message = mongoose.model('message', MessageSchema);