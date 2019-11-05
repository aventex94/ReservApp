const models = require('../models');
module.exports = (sequelize, DataTypes) => {
    const Publicacion = sequelize.define('Publicacion', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        contenido: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            }
        },
        
    });
    User.associate = function(models) {
        //models.User.belongsTo(models.Profile);
      };
    return User;
};