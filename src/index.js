//Importação do express
const express = require('express')  //isso é uma dependencia
const routes = require('./routes')  //você coloca "./" para dizer que é um arquivo
//Chamamos a função do express e definimos em uma constante
const app = express()

app.use(routes)

//4 métodos de http
//  get = pegar
//  post = colocar
//  put = atualizar
//  delete = apagar


//Iniciando a aplicação, vc escolhe uma porta para ele rodar, pode ser qualquer número, padrâo (3000 ou 3333)
app.listen(3000)