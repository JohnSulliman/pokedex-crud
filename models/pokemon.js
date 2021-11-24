const Sequelize = require('sequelize');
const database = require("./../database");

const Pokemon = database.define("pokemons", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    height: {
        type: Sequelize.DECIMAL,
        allowNull: true,
    },
    weight: {
        type: Sequelize.DECIMAL,
        allowNull: true,
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    skills: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    type1: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type2: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    weak: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    strong: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    regions_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: false,
  updatedAt: false,
});

module.exports = Pokemon;