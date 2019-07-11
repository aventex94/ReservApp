const models = require('../models');
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", 'i']
            }
        },

        description: DataTypes.TEXT,
        state: DataTypes.ENUM('inactive', 'active', 'free'),


        hourMin: {
            type: DataTypes.INTEGER,
        },
        hourMax: {
            type: DataTypes.INTEGER,    
        },
        pricePerHour: {
            type: DataTypes.INTEGER,     
        },
        packs: {
            type: DataTypes.INTEGER,
            //packs { packId , packName , packDescription , packPrice , packHours }
        }
    });
    Product.associate = function(models) {
        models.Product.belongsTo(models.Business);
      };
    return Product;
};