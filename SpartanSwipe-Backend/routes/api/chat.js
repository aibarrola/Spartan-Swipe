const express = require('express');
const router = express.Router();
const Chat = require('../../models/Chat');

// new chat
// post method for the main url (/chat)
router.post("/", async (req,res) => {
    const newChat = new Chat({
        members: [req.body.senderId, req.body.receiverId]
    });

    try
    {
        const savedChat = await newChat.save();
        res.status(200).json(savedChat);
    }
    catch(error)
    {
        // status 500 means there is an error inside the database or server
        res.status(500).json(error)
    }
});

// get conv of a user

router.get("/:user_id", async (req, res) => {
    try
    {
        const chat = await Chat.find({
            members: {
                $in: [req.params.user_id]
            }
        });
        res.status(200).json(chat);
    }
    catch(error)
    {
        res.status(500).json(error)
    }
})

module.exports = router;
