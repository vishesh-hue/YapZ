const express = require('express');
const router = express.Router();
const {addUser  , Login , updatePassword ,  getInfo } = require("../controllers/User-Controller");

router.post('/signup',addUser);
router.get('/signin',Login);
router.post('/update-password' , updatePassword);
router.get("/getuserdetails" , getInfo)

module.exports = router;
