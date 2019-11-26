const Friend = require('../models/Friend')
const User = require('../models/User')

class FriendController {
        async index(req,res) {
            const friends = await Friend.findAll( { where:
            {
                id_usuario : req.userId
                
            }
        })
            return res.json(friends)
    
        } 
    

    async store(req, res){
        const { id_friend } = req.body

        const friendExists = await User.findByPk(id_friend)

        console.log(req.userId)
        console.log( id_friend)

        //Validação para não cadastrar usuário já cadastrado
        if(req.userId === id_friend){
            return res.json({error: "Usuário já cadastrado"})
        }

        if(!friendExists){
            return res.json({error: "Usuário não existe"})
        }

        const addFriend = await Friend.create({
            id_usuario: req.userId,
            id_friend: id_friend
        })

        return res.json(addFriend)
    }

}

module.exports = new FriendController ()