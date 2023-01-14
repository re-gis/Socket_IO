const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });
const ejs = require('ejs');


app.set('view engine','ejs');

app.get('/home', (req, res) =>{
    res.render('home');
})

app.listen(2000,()=>{
    console.log("Server listening port 2000...");
})




