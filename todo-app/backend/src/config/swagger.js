const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Todo App API',
            version: '1.0.0',
            description: 'A simple Todo application API with user authentication',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'User ID',
                        },
                        username: {
                            type: 'string',
                            description: 'Username',
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User email',
                        },
                        password: {
                            type: 'string',
                            description: 'User password',
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                        },
                    },
                },
                Todo: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'Todo ID',
                        },
                        title: {
                            type: 'string',
                            description: 'Todo title',
                        },
                        description: {
                            type: 'string',
                            description: 'Todo description',
                        },
                        completed: {
                            type: 'boolean',
                            description: 'Todo completion status',
                        },
                        userId: {
                            type: 'integer',
                            description: 'ID of the user who owns this todo',
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.js', './src/routes/userRoutes.js', './src/routes/todoRoutes.js'], // Updated paths
};

const specs = swaggerJsdoc(options);

module.exports = specs; 