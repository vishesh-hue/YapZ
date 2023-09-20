const express = require('express');
const dotenv = require("dotenv")
const cors=require('cors')
const chatRoutes = require('./routes/chatRoutes');
const userRoutes = require('./routes/userRoutes')
dotenv.config({path:'./config/config.env'})
const corsOptions = {
  origin: 'http://localhost:3000',
};

const  app = express();
app.use(cors(corsOptions));
app.use(express.json());


app.use('/api/chats', chatRoutes);
app.use('/api/users',userRoutes)
module.exports = {app}