const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: { notEmpty: true, },
    },
    hash: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true, },
    },
    salt: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true, },
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: { notEmpty: true, },
    }
});

module.exports = User;




// const { DataTypes} = require('sequelize');

// const user = (sequelize, DataTypes) => {
//     const User = sequelize.define('user', {
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         token: {
//             type: DataTypes.STRING,
//             allowNull: true
//         }
//     });
//     User.associate = models => {
//         User.hasMany(models.Message, { onDelete: 'CASCADE' });
//     };
//     return User;
// };

// export default user;