const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });
const ejs = require('ejs');


app.set('view engine','ejs');

app.get('/home', (req, res) =>{
    res.render('home');
})

app.get('/',(req, res)=>{
    res.send("This is the home page");
}) 

server.listen(2000,()=>{
    console.log("Server listening port 2000...");
})

io.on('connection', (socket) =>{
    console.log("User connected:" + socket.id);

    socket.on('message', (data)=>{
        socket.broadcast.emit('message', data)
    })
})




