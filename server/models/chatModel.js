const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  }],
  chatName: {
    type: String,
    required: true,
  },
  isGroupChat: {
    type: Boolean,
    required: true,
  },
  groupAdminID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
  },
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
