const jwt = require('jsonwebtoken');
const fs = require('fs');
module.exports = {
    v1: {
        authenticate: authenticate,
        validate: validate,
    }
}


function authenticate(req, res) {

    var email = req.body.email;
    var pass = req.body.password;
    var privateKey = fs.readFileSync('jwtRS256.key');
    models.User.findOne({ where: { email: email, password: pass } }).then((user) => {

        jwt.sign({ user: user }, privateKey, { algorithm: 'HS384' }, function (err, token) {
            if (!token) {
                res.send(
                    {
                        "access": "d",
                        "cause": "miss token",
                    }
                );
            } else {
                res.status(200).send(token);

            }
        });

    }).catch((err) => {
        res.status(404).send("sdas");
    })
}

function validate(req, res) {
    const token = req.headers.authorization;
    var cert = fs.readFileSync('jwtRS256.key');
    jwt.verify(token, cert, { algorithms: 'HS384' }, function (err, decoded) {
        if (err) {
            res.status(404).send(err);
        } else {
            res.send(decoded)
        }
    });
}