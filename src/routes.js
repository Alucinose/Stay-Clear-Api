const express = require('express')
const User = require('./app/models/User')
const routes = express.Router()

/**
 * GET = Trazer algo
 * POST = Cadastrar algo
 * PUT = Atualizar algo
 * DELETE = Apagar algo
 */

routes.post('/users', async (req,res)=>{

       const user = await User.create(req.body)

       return res.json(user)
})
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