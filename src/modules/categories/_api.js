import express from 'express';
import isLoggedIn from '../../shared/auth/is-loggedin.js';
import {
  deleteCategorie,
  getCategories,
  postCategorie ,
  showCategorie,
  updateCategorie
} from './_controller.js';

const router = express.Router();

router.get('/category', getCategories);

router.get('/category/:id', showCategorie);

router.post('/category', isLoggedIn  , postCategorie);

router.patch('/category/:id', isLoggedIn, updateCategorie);

router.delete('/category/:id', isLoggedIn, deleteCategorie);

export default router;
