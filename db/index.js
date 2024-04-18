require("dotenv").config();
const conn = require("./db/conn");

const Usuario = require("./models/Usuario");

conn
    .authenticate()
    .then(() => {
     console.log("Banco de Dados conectado e estrutura sicronizada!"); 
    })
    .catch(() => {
     console.log("Erro ao concetar/sincronizar o banco de dados:" + err);
    });

