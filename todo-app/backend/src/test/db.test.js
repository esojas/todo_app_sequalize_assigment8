const { sequelize, testConnection } = require('../config/database');
const User = require('../models/User');
const Todo = require('../models/Todo');

const testDatabase = async () => {
  try {
    // Test database connection
    await testConnection();

    // Sync all models with database
    await sequelize.sync({ force: true });
    console.log('Database synchronized');

    // Create a test user
    const user = await User.create({
      username: 'testuser',
      email: 'test@example.com',
      password: 'testpassword'
    });
    console.log('Test user created:', user.toJSON());

    // Create a test todo
    const todo = await Todo.create({
      title: 'Test Todo',
      description: 'This is a test todo',
      userId: user.id
    });
    console.log('Test todo created:', todo.toJSON());

    // Find the todo with its associated user
    const foundTodo = await Todo.findOne({
      where: { id: todo.id },
      include: [User]
    });
    console.log('Found todo with user:', foundTodo.toJSON());

    // Clean up
    await Todo.destroy({ where: {} });
    await User.destroy({ where: {} });
    console.log('Test data cleaned up');

    process.exit(0);
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
};

testDatabase(); 