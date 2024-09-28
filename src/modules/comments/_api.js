import express from 'express';
import isLoggedIn from '../../shared/auth/is-loggedin.js';

const router = express.Router();

router.get('/comment', );

router.get('/comment/:productId', );

router.post('/comment', isLoggedIn  , );

router.patch('/comment/:id', isLoggedIn, );

router.delete('/comment/:id', isLoggedIn, );

export default router;
