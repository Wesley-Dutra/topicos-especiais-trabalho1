console.log("Server.js executado com sucesso!!");

//EXPRESS
const express = require('express');
const app = express();
app.use(express.json());

//CORS
var cors = require('cors');
app.use(cors({origin: '*'}));

//DOTENV
require("dotenv").config();

//MONGO
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const uri = "mongodb://admin:admin@localhost:27018/BaseViagens?authSource=BaseViagens";

//CONEXÃO COM O MONGOD
MongoClient.connect(uri, (err, client) => {
    if (err)
        return console.log(err);
    db = client.db('BaseViagens');    
});

//DEFINIÇÃO DA PORTA DA API DE SERVIÇO
const port = process.env.API_PORT;

app.listen(port, () => {
    return console.log('API executando na porta ' + port);
});

// usar o momgo
require("./server/banco/mongo");
// Usar as rotas
const routes = require('./server/routes/index');
app.use(routes);