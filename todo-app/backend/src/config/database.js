const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.MONGODB_URI || 'mongodb://localhost:27017/todo_app', {
  dialect: 'mongodb',
  logging: false,
  define: {
    timestamps: true,
    underscored: true
  }
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to MongoDB has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to MongoDB:', error);
  }
};

module.exports = { sequelize, testConnection }; 