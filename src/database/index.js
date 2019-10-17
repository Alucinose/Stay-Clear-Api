const Sequelize = require('sequelize')

//Configuração do nosso banco
const databaseConfig = require('../config/database')

//models
const User = require('../app/models/User')
const Category = require('../app/models/Category')

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
         Category.init(this.connection)
     }
 }



 module.exports = new Database()