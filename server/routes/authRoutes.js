import express from 'express';
import {
	loginUser,
	logoutUser,
	refreshUser,
} from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/login', loginUser);
authRouter.post('/logout', logoutUser);
authRouter.get('/refresh', refreshUser);

export default authRouter;
