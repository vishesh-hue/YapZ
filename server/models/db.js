const mongoose = require('mongoose');
const connectToDB = (mongoUrl) =>{
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('MongoDB connection error:', error);
      });
}


module.exports = {connectToDB}