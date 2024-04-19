require("dotenv").config();
const conn = require("./db/conn");

const Usuario = require("./models/Usuario");
const Jogo = require("./models/Jogo")

conn
    .sync()
   .then(() => {
     console.log("Banco de Dados conectado e estrutura sicronizada!"); 
    })
  .catch((err) => {
  console.log("Erro ao conectar/sincronizar o banco de dados:" + err );
});

const express = require("express");
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.get("/usuarios/novo", (req, res) => {
    res.sendFile(`${__dirname}/views/formUsuario.html`)
});

app.post("/usuarios/novo", async (req, res) => {
    const nickname = req.body.nickname;
    const nome = req.body.nome;

    const dadosUsuario = {
        nickname,
        nome,
    };


const usuario = await Usuario.create(dadosUsuario);

res.send("Usuário inserido sob o id" + usuario.id)
});

app.listen(8000, () =>{
    console.log("Server rodando na porta 8000!");
});


app.post("/jogos/novo", async (req, res) => {
    const titulo = req.body.titulo;
    const desc = req.body.desc;
    const preçoBase = req.body.prec;

    const dadosJogo = {
        titulo,
        desc,
        preçoBase,
    };


const jogo = await Jogo.create(dadosJogo);

res.send("Jogo inserido sob o id" + jogo.id)
});

app.get("/jogos/novo", (req, res) =>{
    res.sendFile(`${__dirname}/views/formJogo.html`)
});

