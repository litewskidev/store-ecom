import express from 'express'
import {
	authorizeUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
	authorizeAdmin,
} from '../controllers/userController.js'
import { protect } from '../middleware/userAuthMiddleware.js'

const userRouter = express.Router()

userRouter.post('/admin', authorizeAdmin)
userRouter.post('/', registerUser)
userRouter.post('/auth', authorizeUser)
userRouter.post('/logout', logoutUser)
userRouter
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile)

export default userRouter
