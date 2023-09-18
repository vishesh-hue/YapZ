const express = require('express');
const dotenv = require("dotenv")
const cors=require('cors')
const chatRoutes = require('./routes/chatRoutes');
dotenv.config({path:'/config/config.env'})
const  app = express();
const corsOptions = {
    origin: 'http://localhost:3000',
  };
  
app.use(cors(corsOptions));
  

app.use('/api', chatRoutes);

module.exports = {app}