
import express from 'express';
import isLoggedIn from '../../shared/auth/is-loggedin.js';
import {
  deleteUsers,
  getUsers,
  loginUser,
  showMe,
  showUser,
  updateMe,
  updateUsers ,
  registerAuth
} from './_controller.js';

const router = express.Router();


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: Hammasi hali zor boladi
 */
router.get('/users', isLoggedIn, getUsers);


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - first_name
 *         - last_name
 *         - role
 *         - username
 *         - password
 *       properties:
 *        
 *         first_name:
 *           type: string
 *           description: The first name of the user
 *         last_name:
 *           type: string
 *           description: The last name of the user
 *         role:
 *           type: string
 *           enum: [admin, user]
 *           description: Role of the user
 *         username:
 *           type: string
 *           description: Username for login
 *         password:
 *           type: string
 *           description: User's password
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Date of user creation
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: The user was successfully registered
 *       400:
 *         description: Username already exists or invalid input
 */
router.post('/register', registerAuth );
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 default: admin
 *               password:
 *                 type: string
 *                 default: 1234 
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 */
router.post('/login', loginUser);

router.get('/users/me', isLoggedIn, showMe);


/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Successfully retrieved user
 */
router.get('/users/:id', isLoggedIn, showUser);

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Successfully updated user
 */
router.patch('/users/:id', isLoggedIn, updateUsers);

router.delete('/users/:id', isLoggedIn, deleteUsers);

export default router;
