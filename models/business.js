'use strict';
const models = ('../models');
module.exports = (sequelize, DataTypes) => {
    const Business = sequelize.define('Business', {
        businessId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            isUnique: true,
            autoIncrement: true,
        },
        name: DataTypes.TEXT,
    });

    //Business.associate = function (models) {
    //Business.belongsToMany(models.Profile,{through:'ProfileTask'});
    return Business;
};