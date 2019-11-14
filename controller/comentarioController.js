const models = require('../models');

module.exports = {
    v1: {
        createComentario:createComentario,    

    }
};

function createComentario(req,res){
    models.Comentario.create({
        contenido:req.body.contenido,
        PublicacionId:req.body.PublicacionId,
        UserUid: req.body.UserUid,
    }).then((comentario)=>{
        
        res.status(200).send(comentario);
    }).catch((err)=>{   
        res.status(500).send(err);
    })
}