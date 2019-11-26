const express = require('express')
const routes = express.Router()



//Nossos controllers
const UserController = require('./app/controllers/UserController')
const AuthController = require('./app/controllers/AuthController')
const FriendController = require ('./app/controllers/FriendController')

//Nossos middlewares
const AuthMiddleware = require('./app/middlewares/AuthMiddleware')

/**
 * MÉTODOS HTTP
 * GET = Trazer algo
 * POST = Cadastrar algo
 * PUT = Atualizar algo
 * DELETE = Apagar algo
 */

//************* */ NOSSAS ROTAS*******************************

routes.post('/users', UserController.store) //Rota de cadastro de usuários
routes.post('/auth', AuthController.store) //Rota de autenticação

//Rotas abaixo da linha 20, precisam de autenticação
routes.use(AuthMiddleware)

routes.get('/users', UserController.index) //Rota de retorno de usuários
routes.get('/friends', FriendController.index) //Rota de retorno de amigos
routes.post('/friends', FriendController.store) //Rota de adicionar amigos

//routes.post('/users', async (req,res)=>{

//        const user = await User.create(req.body)

//        return res.json(user)
// })

// routes.post('/category', async(req,res)=>{

//     const category = await Category.create(req.body)

//     return res.json(category)

// })

// //------------Criamos uma rota para retornar json sobre o usuário
// routes.get('/users', (req, res)=>{
//     return res.json(
//         {
//             usuario: 'Fernando',
//             idade: 19,
//             profissao: 'Programador',
//             amigos: ['Juju','Riquinho','Japa','Tinder','Vettore','Juninho','Wesley','Ana Silva','Jhennypher'],
//             ativo: false,

//         }
//     )
// })

// routes.get('/category', (req, res)=>{
//     return res.json(
//         {
//             usuario: 'Juninho Play',
//             idade: 13,
//             profissao: 'Programador',
//             amigos: ['Tinder','Vettore','Juninho','Wesley','Ana Silva','Jhennypher'],
//             ativo: false,

//         }
//     )
// })

// //-----------Rota inicial
// routes.get('/iniciating', (req, res)=>{
//     return res.send('Olá mundo!')
// })

// //Params
// // == é comparativo , === é pra vererificar se ele é exatamente igual

// routes.get('/users/:name', (req, res)=>{
//     const name = req.params.name

//     return res.send(name)

// })

//*************************************** 

module.exports = routes