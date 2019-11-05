const models = require('../models');


module.exports = {
    v1: {
        

    }
};

function getAllPublicaciones(req,res){
    models.Publicacion.findAll({
        attributes:['id','titulo','contenido'],

    }).then((publicaciones)=>{
        res.status(200).send(publicaciones);
    }).catch((err)=>{
        console.log(err);
    });
}
