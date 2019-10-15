//Importação do express
const express = require('express')

//Chamamos a função do express e definimos em uma constante
const app = express()

//4 métodos de http
//  get = pegar
//  post = colocar
//  put = atualizar
//  delete = apagar


//Criamos uma rota para retornar json sobre o usuário
app.get('/users', (req, res)=>{
    return res.json(
        {
            usuario: 'Juliano Mazeu',
            idade: 25,
            profissao: 'Balconista',
            amigos: ['Juju','Riquinho','Japa','Tinder','Vettore','Juninho','Wesley','Ana Silva','Jhennypher'],
            ativo: false,

        }


    )

})

//Iniciando a aplicação, vc escolhe uma porta para ele rodar, pode ser qualquer número, padrâo (3000 ou 3333)
app.listen(3000)