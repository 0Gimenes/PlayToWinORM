const db = require(".../db/conn");
const {DataTypes} = require("sequilize");

const Usuario = db.define("Usuario", {
    nickname:{
        type: DataTypes.STRING,
        required: true,
    },
    nome: {
        type : DataTypes.STRING,
        required: true
    },
})

module.exports = Usuario;