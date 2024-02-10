import express from 'express';
import {
	addProduct,
	deleteProduct,
	getAllProducts,
	getProduct,
	updateProduct,
} from '../controllers/productController.js';
import { protect } from '../middleware/userAuthMiddleware.js';

const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProduct);
productRouter.post('/add', protect, addProduct);
productRouter.put('/update', protect, updateProduct);
productRouter.delete('/delete', protect, deleteProduct);

export default productRouter;
