const models = require('../models');

module.exports = {
    v1:{
        getAllUsers:getAllUsers,
        getUserById:getUserById,
        createUser:createUser,
    },
    v2:{
        
    }
};

function getAllUsers(req,res,next){
    models.User.findAll({
        atrributes:['uid'],
        include:[{
            model: models.Profile,
            
            atrributes:['pid','nombre'],
        }]
    }).then((users)=>{
        res.status(200).send(users)
    }).catch(()=>{
        console.log("Algo Fallo");
    });
}
function getUserById(req,res){
    models.User.findByPk(req.params.id).then((user)=>{
        res.send(user);
    }).catch((err)=>{
        res.send(err);
    })
}
function createUser(req,res){
    models.User.create({
        name:req.body.name,
        lastName:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        profileId:req.body.profileid,
        
    }).then(()=>{
        res.status(200).send("USER CREATED");
    }).catch((err)=>{
        console.log(err);
    })
}
