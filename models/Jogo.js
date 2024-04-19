const db = require("../db/conn");
const {DataTypes} = require("sequelize");

const Jogo = db.define("Jogo",{
    titulo:{
        type: DataTypes.STRING,
        required: true,
    },
    desc: {
        type : DataTypes.STRING,
        required: true
    },
    preçoBase: {
        type : DataTypes.STRING,
        required: true
    },

})

module.exports = Jogo;