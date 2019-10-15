const express = require('express')

const routes = express.Router()

//Criamos uma rota para retornar json sobre o usuário
routes.get('/users', (req, res)=>{
    return res.json(
        {
            usuario: 'Fernando',
            idade: 19,
            profissao: 'Programador',
            amigos: ['Juju','Riquinho','Japa','Tinder','Vettore','Juninho','Wesley','Ana Silva','Jhennypher'],
            ativo: false,

        }
    )
})

//Rota inicial
routes.get('/iniciating', (req, res)=>{
    return res.send('Olá mundo!')
})

//Params
// == é comparativo , === é pra vererificar se ele é exatamente igual

routes.get('/users/:name', (req, res)=>{
    const name = req.params.name

    return res.send(name)

})

module.exports = routes