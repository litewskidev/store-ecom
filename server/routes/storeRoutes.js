import express from 'express';
import {
	getAllStores,
	getStore,
	addStore,
	updateStore,
	deleteStore,
} from '../controllers/storeControllers.js';
import { protect } from '../middleware/userAuthMiddleware.js';

const storeRouter = express.Router();

storeRouter.get('/', getAllStores);
storeRouter.get('/:id', getStore);
storeRouter.post('/add', protect, addStore);
storeRouter.put('/update', protect, updateStore);
storeRouter.delete('/delete', protect, deleteStore);

export default storeRouter;
