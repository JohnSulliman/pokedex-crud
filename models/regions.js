const Sequelize = require('sequelize');
const database = require("./../database");

const Regions = database.define("regions", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    region_name: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    region_image: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: false,
  updatedAt: false,
});

module.exports = Regions;