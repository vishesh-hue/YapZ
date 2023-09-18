const {app} = require('./app')
const port = process.env.PORT;
const {connectToDB} = require('./config/db');
connectToDB();


app.listen(port, ()=>{
    console.log(`SERVER RUNNING FINE AT ${port}`);
})