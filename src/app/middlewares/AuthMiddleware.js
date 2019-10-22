const jwt = require ('jsonwebtoken')

module.exports = async(req, res, next) => {
    const authHeader = req.headers.authorization

    //Operador NOT(!), inverte os valores
    if(!authHeader){
        return res.json({error: "Token não informado"})
    }

     //Fazemos assim: Dessa maneira fica mais legível
     const [bearer, token] = authHeader.split(  ' ')
     console.log(token)

    try{
        //Descriptografando nosso token
        const decoded = jwt.verify(token, '8e6edd0ffe9d90025fd73ce4904007b0');
    
        //Passando nosso id para aplicação
        req.userId = decoded.id

        //Ele passa a aplicação para frente
        return next()
    
    }catch(err){
        console.log(err)
    }

  

 //   return next()
}