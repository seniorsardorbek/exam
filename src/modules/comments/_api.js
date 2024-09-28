import express from 'express';
import isLoggedIn from '../../shared/auth/is-loggedin.js';
import {
  getComments,
  postComment,
  updateComment,
  deleteComment
} from './_controller.js';

const router = express.Router();

/**
 * @swagger
 * /comment/{productId}:
 *   get:
 *     summary: Get comments for a product
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to fetch comments for
 *     responses:
 *       200:
 *         description: A list of comments for the product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 *       404:
 *         description: Product not found
 */
router.get('/comment/:productId', isLoggedIn, getComments);

/**
 * @swagger
 * /comment:
 *   post:
 *     summary: Create a new comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PostComment'
 *     responses:
 *       201:
 *         description: Comment created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/comment', isLoggedIn, postComment);

/**
 * @swagger
 * /comment/{id}:
 *   patch:
 *     summary: Update an existing comment
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the comment to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PatchComment'
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *       404:
 *         description: Comment not found
 */
router.patch('/comment/:id', isLoggedIn, updateComment);

/**
 * @swagger
 * /comment/{id}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the comment to delete
 *     responses:
 *       204:
 *         description: Comment deleted successfully
 *       404:
 *         description: Comment not found
 */
router.delete('/comment/:id', isLoggedIn, deleteComment);

export default router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The ID of the comment
 *         comment:
 *           type: string
 *           description: The content of the comment
 *         userId:
 *           type: string
 *           description: The ID of the user who made the comment
 *         productId:
 *           type: string
 *           description: The ID of the product the comment is associated with
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the comment was created
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the comment was last updated
 *     PostComment:
 *       type: object
 *       required:
 *         - comment
 *         - productId
 *       properties:
 *         comment:
 *           type: string
 *           description: The content of the comment
 *         productId:
 *           type: string
 *           description: The ID of the product the comment is for
 *     PatchComment:
 *       type: object
 *       properties:
 *         comment:
 *           type: string
 *           description: The updated content of the comment
 */
