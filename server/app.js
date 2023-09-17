const express = require('express');
const dotenv = require("dotenv")
const {chats} = require("./data/data")
dotenv.config({path:'/config/config.env'})
const  app = express();


module.exports = {app}