import express from 'express';
import {
	addBrand,
	deleteBrand,
	getAllBrands,
	getBrand,
	updateBrand,
} from '../controllers/brandController.js';
import { protect } from '../middleware/userAuthMiddleware.js';

const brandRouter = express.Router();

brandRouter.get('/', getAllBrands);
brandRouter.get('/:id', getBrand);
brandRouter.post('/add', protect, addBrand);
brandRouter.put('/update', protect, updateBrand);
brandRouter.delete('/delete', protect, deleteBrand);

export default brandRouter;
