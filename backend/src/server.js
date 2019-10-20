const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://carlos:19911991carlos@lcstore-shard-00-00-3iayj.mongodb.net:27017,lcstore-shard-00-01-3iayj.mongodb.net:27017,lcstore-shard-00-02-3iayj.mongodb.net:27017/proyecto1?ssl=true&replicaSet=lcstore-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


// GET , POST, PUT, DELETE 

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edit, delete)
// req.body = Acessar corpo da requisicion (para crear, edit)

app.use(express.json());
app.use(routes);

app.listen(3333);