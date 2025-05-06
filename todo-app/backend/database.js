const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME || 'todo_app',
    process.env.DB_USER || 'root',
    process.env.DB_PASS || '',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: true,
            underscored: true
        }
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL successfully');
    } catch (error) {
        console.error('Error connecting to MySQL:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };