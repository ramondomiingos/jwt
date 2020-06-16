const conta = require('../models/conta')
const { check, validationResult } = require('express-validator');

module.exports = {
    async create(req, res){
        await check('banco_code').isLength({ min: 3, max:3 }).run(req);
        await check('nome').exists().run(req);
        await check('banco_nome').exists().run(req);
        await check('tipo').exists().run(req);
        await check('numero').exists().run(req);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
          }
          
         conta.create({
            nome:req.body.nome,
            banco_nome:req.body.banco_nome,
            banco_code:req.body.banco_code,
            tipo:req.body.tipo,
            numero:req.body.numero,
            userId:req.userId,
            created_at: Date()
         }).then(user =>  res.json(user))
         .catch(err => res.status(400).json({'error':'ocorreu um erro no cadastramento da conta'}))

    },
    async getAll(req,res){
        let contas = await conta.find({userId:req.userId})
        res.json(contas)
        
    },
    async removeConta(req,res){
        conta.deleteOne({_id:req.params.conta, userId:req.userId})
        .then(resp =>{ 
            if(resp.deletedCount >0 ){
                return res.status(200).json({'sucess':'removido'}) 
            }else{
                return res.status(400).json({'erro':'veja as coisas'})
            }
    }  )
                
        
}
}