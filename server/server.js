//require needed moddules
const path = require('path');
const express = require('express');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

//create app from express
var app = express();

//using express.static to serve static files
app.use(express.static(publicPath));

//tel app to listen to port 3000 
app.listen(port, 'localhost', () => {
    console.log(`server is up on ${port}`);
});
