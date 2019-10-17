const User = require('../models/User')

class UserController{
    index() {} // GET => Me retorna todos os usuários
    show() {} // GET => Me retorna somente UM usuário
   
    // POST => Criamos usuários
    async store(req,res) {
        const user = await User.create(req.body)
        
        return res.json(user)
    } 
      

    update() {} //PUT => Alteramos alguma informação do usuário
    delete() {} //DELETE => Deleta um usuário
}


module.exports = new UserController()