const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');
const User = require('../models/User');

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - userId
 *             properties:
 *               title:
 *                 type: string
 *                 example: Buy groceries
 *               description:
 *                 type: string
 *                 example: Milk, eggs, bread
 *               completed:
 *                 type: boolean
 *                 example: false
 *               userId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: User not found
 */
router.post('/', async (req, res) => {
    try {
        const { title, description, completed, userId } = req.body;
        
        // Validate required fields
        if (!title || !userId) {
            return res.status(400).json({ error: "Missing required fields: title and userId" });
        }

        // Check if user exists
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const todo = await Todo.create({
            title,
            description: description || null,
            completed: completed || false,
            userId
        });
        
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all todos with their users
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: List of todos with user information
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Server error
 */
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.findAll({
            include: [User]
        });
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; 