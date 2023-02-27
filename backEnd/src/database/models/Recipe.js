module.exports = (sequelize, dataTypes) => {
    let alias = 'Recipe'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        summary: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
        steps: {
            type: dataTypes.STRING,
            allowNull: false
        },
        dishtype: {
            type: dataTypes.STRING,
            allowNull: false
        },
        healthscore: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
       
                
        diets: {
            type: dataTypes.STRING
        },
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Recipe = sequelize.define(alias,cols,config);

    Recipe.associate = function (models) {
        
        Recipe.belongsToMany(models.Diet, { 
            through: "recipe_diet"
        })
    }

    return Recipe
};