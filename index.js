const express = require('express');
const app = express();
const port = 8000;



// Setting view engine and views
app.set('view engine','ejs');
app.set('views','./views');

// Middleware1: Use static folder


// Using express router
app.use(express.urlencoded());
app.use('/',require('./routes'));
app.use(express.static('static'));


app.listen(port,function(err){
    if(err){
        console.log("Error starting the server");
        return;
    }
    console.log("Server is up and running!!");
    return;
});