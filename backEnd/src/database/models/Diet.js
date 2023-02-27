// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Diet';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        createdAt: { type: dataTypes.INTEGER, field: "created_at" },
        updatedAt: { type: dataTypes.INTEGER, field: "updated_at" }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Diet = sequelize.define(alias, cols, config);

    Diet.associate = function(models) {
        Diet.belongsToMany(models.Recipe, { 
            through: "recipe_diet"
            
        })
    }

    return Diet
};