
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
import swagger  from 'swagger-jsdoc'


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get('/users', isLoggedIn, getUsers);
router.post('/register', registerAuth );
router.post('/login', loginUser);

router.get('/users/me', isLoggedIn, showMe);
router.get('/users/:id', isLoggedIn, showUser);


router.patch('/users/me', isLoggedIn, updateMe);
router.patch('/users/:id', isLoggedIn, updateUsers);

router.delete('/users/:id', isLoggedIn, deleteUsers);

export default router;
