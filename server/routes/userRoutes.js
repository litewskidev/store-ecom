import express from 'express';
import { authorizeUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/userAuthMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authorizeUser);
router.post('/logout', logoutUser);
router.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile);

export default router;
