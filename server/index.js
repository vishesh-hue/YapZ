const {app} = require('./app')
const port = process.env.PORT || 4000;
const MONGODB_URI = "mongodb+srv://yuvrajSingh05:moneY341@testcluster.hqa0fzg.mongodb.net/test";
const {connectToDB} = require('./models/db');
connectToDB(MONGODB_URI);
app.listen(port, ()=>{
    console.log(`SERVER RUNNING FINE AT ${port}`);
})