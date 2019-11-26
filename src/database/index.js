const Sequelize = require('sequelize')

//Configuração do nosso banco
const databaseConfig = require('../config/database')

//models
const User = require('../app/models/User')
const Friend = require('../app/models/Friend')

/**
 * Carregar nossos models
 */

 class Database{
     constructor(){

        this.init()
     }

     init() {
         this.connection = new Sequelize(databaseConfig)

         User.init(this.connection)
         Friend.init(this.connection)
     }
 }



 module.exports = new Database()