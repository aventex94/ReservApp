const models = require('../models');


module.exports = {
    v1: {
        getAllPublicaciones:getAllPublicaciones,
        createPublicacion:createPublicacion,

    }
};

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */

function getAllPublicaciones(req,res){
    models.Publicacion.findAll({
        attributes:['id','titulo','contenido'],
        include: [{
            model: models.Comentario,include:[{
                model: models.User
            }]

            
        }]
    }).then((publicaciones)=>{
        res.status(200).send(publicaciones);
    }).catch((err)=>{
        console.log(err);
    });
}

function createPublicacion(req,res){
    models.Publicacion.create({
            titulo:req.body.titulo,
            contenido:req.body.contenido,
            UserUid:req.body.user,
    }).then(()=>{
        res.status(200).send("SE LOGRO");
    }).catch((err)=>{
        res.status(500).send(err);
    })
    
}
