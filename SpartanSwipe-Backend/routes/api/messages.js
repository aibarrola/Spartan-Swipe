const express = require('express');
const router = express.Router();
const Message = require('../../models/Message');

// add messages
router.post("/", async (req,res) => {
    // Message(req.body) takes everything in the request json and pastes it into newMessage
    const newMessage = new Message(req.body);

    try
    {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    }
    catch(error)
    {
        // status 500 means there is an error inside the database or server
        res.status(500).json(error)
    }
});

// get messages

router.get("/:chatId", async (req,res) => {
    try
    {
        const messages = await Message.find({
            chatId:req.params.chatId
        });
        res.status(200).json(messages);
    }
    catch(error)
    {
        res.status(500).json(error)
    }
});

module.exports = router;
