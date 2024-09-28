import express from 'express';
import isLoggedIn from '../../shared/auth/is-loggedin.js';
import {
  deleteCategorie,
  getCategories,
  postCategorie,
  showCategorie,
  updateCategorie
} from './_controller.js';

const router = express.Router();

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Retrieve all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Successfully retrieved categories
 */
router.get('/category', getCategories);

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the category
 *         description:
 *           type: string
 *           description: The description of the category
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The time the category was created
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The last time the category was updated
 */

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/category', isLoggedIn, postCategorie);

/**
 * @swagger
 * /category/{id}:
 *   get:
 *     summary: Retrieve a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The category ID
 *     responses:
 *       200:
 *         description: Successfully retrieved category
 *       404:
 *         description: Category not found
 */
router.get('/category/:id', showCategorie);

/**
 * @swagger
 * /category/{id}:
 *   patch:
 *     summary: Update a category by ID
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Category not found
 */
router.patch('/category/:id', isLoggedIn, updateCategorie);

/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     summary: Delete a category by ID
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The category ID
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 */
router.delete('/category/:id', isLoggedIn, deleteCategorie);

export default router;
