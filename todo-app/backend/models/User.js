const { DataTypes } = require("sequelize-mongodb");
const { sequelize } = require("../database");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

module.exports = User;