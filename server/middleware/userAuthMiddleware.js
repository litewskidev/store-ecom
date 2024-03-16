import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
	const authHeader = req.headers.authorization || req.headers.Authorization;

	if (!authHeader?.startsWith('Bearer ')) {
		return res.status(401).json({ message: 'Unauthorized.' });
	}

	const token = authHeader.split(' ')[1];

	jwt.verify(token, process.env.JWT_ACCESS, (err, decoded) => {
		if (err) {
			return res.status(403).json({ message: 'Forbidden.' });
		}

		req.user = decoded.userInfo.email;
		req.admin = decoded.userInfo.admin;
		next();
	});
});

export { protect };
