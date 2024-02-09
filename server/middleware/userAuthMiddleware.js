import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
	let token
	token = req.cookies.token

	if (token) {
		try {
			const verified = jwt.verify(token, process.env.JWT_SECRET)

			req.user = await User.findById(verified.userId).select('-password')
			next()
		} catch (err) {
			res.status(403)
			throw new Error('Not authorized. Invalid token.')
		}
	} else {
		res.status(401)
		throw new Error('Not authorized. Token not found.')
	}
})

export { protect }
