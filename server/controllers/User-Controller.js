const jwt=require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET_KEY || 'miakhalifa' 
const jwtExpiration = '6h'; 

const User = require("../models/userModel");

const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const Login = async (req, res) => {
  try {
      const { username, password } = req.body;
      console.log(username,password)
    const user = await User.findOne({
      username: username,
      password: password,
    });

    if (user) {
      const token = jwt.sign({ username: username }, jwtSecret, {
        expiresIn: jwtExpiration,
      });

      return res.status(200).json({
        success: true,
        message: "Login Successful",
        token: token,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "INVALID LOGIN CREDENTIALS",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updatePassword = async (req,res) =>{
  try {
    const {username ,  newpassword } = req.body;
    const user = await User.findOne({
      username : username 
    })
    
    user.password = newpassword;
    await user.save();
    
    return res.status(200).json({
      success: true,
      message: "Password Update Successful",
    })
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getInfo = async (req,res) =>{
  const username =   req.query.username
  const user = await User.findOne({
    username : username 
  })
  res.status(200).json(user)    
}

module.exports = {addUser , Login , updatePassword ,  getInfo  }