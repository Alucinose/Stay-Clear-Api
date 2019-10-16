/**
 * Configurações do nosso banco
 */

 module.exports = {
     dialect: 'mysql',
     host: 'localhost',
     username: 'root',
     password: '',
     database: 'stay-clear',
     define: {
         timestamps: true, // Ele vai criar o created_at e o updated_at
         underscored: true, //Ele altera o padrão de nome das tabelas para underscored
         underscoredall: true //Ele altera o padrão de nome das colunas para underscored
     }
 }