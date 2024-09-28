import express from 'express';
import isLoggedIn from '../../shared/auth/is-loggedin.js';
import { postProduct ,showProduct , deleteProduct , getProducts, updateProduct  } from './_controller.js';

import {upload} from "../../shared/multer/multer.js"

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - color
 *         - price
 *         - quantity
 *         - categoryId
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the product
 *         color:
 *           type: string
 *           description: Color of the product
 *         price:
 *           type: number
 *           description: Price of the product
 *         quantity:
 *           type: number
 *           description: Available quantity of the product
 *         categoryId:
 *           type: string
 *           description: The ID of the category
 *         images:
 *           type: array
 *           items:
 *             type: string
 *             description: URL or path of the product image
 */

const router = express.Router();
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       401:
 *         description: Unauthorized
 */
router.get('/products', getProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
router.get('/products/:id', showProduct);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product
 *               color:
 *                 type: string
 *                 description: Color of the product
 *               price:
 *                 type: number
 *                 description: Price of the product
 *               quantity:
 *                 type: number
 *                 description: Available quantity
 *               categoryId:
 *                 type: string
 *                 description: Category ID for the product
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Product created
 *       400:
 *         description: Invalid input
 */
router.post('/products', isLoggedIn, upload.array('images'), postProduct);

/**
 * @swagger
 * /products/{id}:
 *   patch:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Product not found
 */
router.patch('/products/:id', isLoggedIn, updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       204:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */
router.delete('/products/:id', isLoggedIn, deleteProduct);

export default router;
