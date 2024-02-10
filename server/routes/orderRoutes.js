import express from 'express';
import {
	createOrder,
	updateOrder,
	deleteOrder,
	getUserOrders,
	getAllOrders,
} from '../controllers/orderController.js';
import { protect } from '../middleware/userAuthMiddleware.js';

const orderRouter = express.Router();

orderRouter.post('/', createOrder);
orderRouter.put('/update', updateOrder);
orderRouter.delete('/delete', protect, deleteOrder);
orderRouter.get('/user', protect, getUserOrders);
orderRouter.get('/all', protect, getAllOrders);

export default orderRouter;
