const Joi = require('joi');

module.exports = {
    v1: {
        
        validateBodyPost: validateBodyPost,
        
    }
}
 

/**
 * Validates the params received from the body of the post request
 * @param {Object} req
 * @param {Object} res
 * @param {*} next
 */

 function validateBodyPost(req,res,next){
     const schema = Joi.object().keys({
        name: Joi.string().required().min(4),
        password: Joi.string().required().min(6),
        lastname: Joi.string().required(),
        email: Joi.string().required().email(),
        ProfileId: Joi.number().positive().integer().required() 
    });
    const data = req.body;
    Joi.validate(data,schema,(err,value)=>{
        if (err){
            res.status(422).json({
                status:"error",
                message:"Formato de parametros invalido",
                data:data
            });

        }else{
            next();
        }
    });
 }