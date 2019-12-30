const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');


const routes = require('./routes');

//io.on('connection', socket => {
    //console.log('Usuario connectado', socktet.id);
//});


const app = express();
const server = http.Server(app);
const io = socketio(server);

io.on('connection', socket => {
  console.log('Usuario Conectado', socket.id);
});


mongoose.connect('mongodb://carlos:19911991carlos@lcstore-shard-00-00-3iayj.mongodb.net:27017,lcstore-shard-00-01-3iayj.mongodb.net:27017,lcstore-shard-00-02-3iayj.mongodb.net:27017/proyecto1?ssl=true&replicaSet=lcstore-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


// GET , POST, PUT, DELETE 

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edit, delete)
// req.body = Acessar corpo da requisicion (para crear, edit)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
server.listen(3333);