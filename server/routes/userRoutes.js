import express from 'express';
import {
	registerUser,
	updateUserProfile,
	getAllUsers,
} from '../controllers/userController.js';
import { protect } from '../middleware/userAuthMiddleware.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.get('/all', protect, getAllUsers);
userRouter.put('/update', protect, updateUserProfile);

export default userRouter;
