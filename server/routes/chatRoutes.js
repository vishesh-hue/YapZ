const express = require('express');
const router = express.Router();
const {fetchChats} = require("../controllers/Chat-Controller");

router.get('/chat',fetchChats)

module.exports = router;
