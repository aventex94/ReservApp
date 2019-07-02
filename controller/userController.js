const models = require('../models');
const jwt = require('jsonwebtoken');
const fs = require('fs');


module.exports = {
    v1: {
        getAllUsers: getAllUsers,
        getUserById: getUserById,
        createUser: createUser,
        authenticate: authenticate,
    }
};

function authenticate(req, res) {
    // const privateKey = fs.readFileSync('private.key', 'utf8');
    var email = req.body.email;
    var pass = req.body.password;
    var privateKey = fs.readFileSync('privatekey.pem');
    models.User.findOne({ where: { email: email, password: pass } }).then((user) => {
        
        jwt.sign({user:user}, privateKey,{ algorithm: 'RS256' }, function(err, token) {
            if(err){
                res.send(err);
            }else{
                res.status(200).send(token);
            }
          });

    }).catch((err) => {
        res.status(404).send(err);
    })
}
function getAllUsers(req, res, next) {
    models.User.findAll({
        atrributes: ['uid'],
        include: [{
            model: models.Profile,

            atrributes: ['pid', 'nombre'],
        }]
    }).then((users) => {
        res.status(200).send(users)
    }).catch(() => {
        console.log("Algo Fallo");
    });
}
function getUserById(req, res) {
    models.User.findByPk(req.params.id).then((user) => {
        res.send(user);
    }).catch((err) => {
        res.send(err);
    })
}
function createUser(req, res) {
    models.User.create({
        name: req.body.name,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        profileId: req.body.profileid,

    }).then(() => {
        res.status(200).send("USER CREATED");
    }).catch((err) => {
        console.log(err);
    })
}
