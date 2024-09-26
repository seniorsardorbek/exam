import express from 'express';
import isLoggedIn from '../../shared/auth/is-loggedin.js';
import { postProduct ,showProduct , deleteProduct , getProducts, updateProduct  } from './_controller.js';

import {upload} from "../../multer/multer.js"

const router = express.Router();

router.get('/product', getProducts );

router.get('/product/:id', showProduct );

router.post('/product', isLoggedIn , upload.array('images') , postProduct );

router.patch('/product/:id', isLoggedIn, updateProduct );

router.delete('/product/:id', isLoggedIn,  deleteProduct);

export default router;
