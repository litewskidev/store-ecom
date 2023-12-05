import express from 'express';
import { addProduct, deleteProduct, getAllProducts, updateProduct } from '../controllers/productController.js';
import { protect } from '../middleware/userAuthMiddleware.js';

const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.post('/add', protect, addProduct);
productRouter.put('/update', updateProduct);
productRouter.delete('/delete', deleteProduct);

export default productRouter;
