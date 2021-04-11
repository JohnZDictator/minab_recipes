const Sequelize = require('sequelize');

require('dotenv').config();

module.exports = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD, {
        host: 'localhost',
        dialect: 'postgres',
    },
);