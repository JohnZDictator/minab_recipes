const Sequelize = require('sequelize');
const db = require('../config/database');

const FoodMenu = db.define('food_menu', {
    food_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: { notEmpty: true, },
    },
    food_price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: { notEmpty: true, },
    },
    food_type: {
        type: Sequelize.STRING,
    }
});

module.exports = FoodMenu;