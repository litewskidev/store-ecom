import express from 'express';
import { createCart, updateCart, deleteCart, getUserCart, getAllCarts } from '../controllers/cartController.js';
import { protect } from '../middleware/userAuthMiddleware.js';

const cartRouter = express.Router();

cartRouter.post('/', createCart);
cartRouter.put('/update', updateCart);
cartRouter.delete('/delete', deleteCart);
cartRouter.get('/user', protect, getUserCart);
cartRouter.get('/all', protect, getAllCarts);

export default cartRouter;
