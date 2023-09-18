const chatDummyData = require('../data/data.js')

const fetchChats = (req,res) =>{
    res.json(chatDummyData)
}


module.exports = {fetchChats}