import express from 'express';
import {
	registerUser,
	getUserProfile,
	updateUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/userAuthMiddleware.js';

const userRouter = express.Router();
userRouter.use(protect);

userRouter.post('/', registerUser);
userRouter.route('/profile').get(getUserProfile).put(updateUserProfile);

export default userRouter;
