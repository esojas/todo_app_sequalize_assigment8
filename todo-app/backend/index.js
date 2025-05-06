const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const { connectDB, sequelize } = require("./database");
const swaggerSpecs = require('./src/config/swagger');
const userRoutes = require('./src/routes/userRoutes');
const todoRoutes = require('./src/routes/todoRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger documentation
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerSpecs, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }'
}));

// Routes
app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

// Connect to MySQL and sync models
const startServer = async () => {
    try {
        await connectDB();
        await sequelize.sync({ force: true });
        console.log("Database synced successfully");
        
        app.listen(3000, () => {
            console.log("Server running on port 3000");
            console.log("Swagger documentation available at http://localhost:3000/api-docs");
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
};

startServer(); 