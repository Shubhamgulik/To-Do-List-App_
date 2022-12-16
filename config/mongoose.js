// Require library
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/to-do-list_db');

//acquire the connection (to check if it is successful!!)
const db = mongoose.connection;

console.log('Connecting t DB');
// On Error
db.on('error',console.error.bind(console,'Error Connecting to DB!'));

// On Successful Connection
db.once('open',function(){
    console.log('Database is UP and running!!');
});