import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//  desc     Authorize user / Set token
//  route    POST /api/auth/login
//  access   Public
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ message: 'All fields are required.' });
	}

	const user = await User.findOne({ email });

	if (!user) {
		return res.status(401).json({ message: 'Unauthorized. User not found.' });
	}

	const passwordMatch = await bcrypt.compare(password, user.password);

	if (!passwordMatch) {
		return res.status(401).json({ message: 'Unauthorized. Wrong Password.' });
	}

	const accessToken = jwt.sign(
		{
			userInfo: {
				email: user.email,
				admin: user.admin,
			},
		},
		process.env.JWT_ACCESS,
		{ expiresIn: '1h' },
	);

	const refreshToken = jwt.sign(
		{ email: user.email },
		process.env.JWT_REFRESH,
		{ expiresIn: '7d' },
	);

	res.cookie('token', refreshToken, {
		httpOnly: true,
		secure: true,
		sameSite: 'None',
		maxAge: 604800000, //  7 * 24 * 60 * 60 * 1000 / 7 DAYS
	});

	res.json({ accessToken });
});

//  desc     Refresh token
//  route    GET /api/auth/refresh
//  access   Public
const refreshUser = asyncHandler(async (req, res) => {
	const cookies = req.cookies;

	if (!cookies?.token) {
		return res.status(401).json({ message: 'Unauthorized.' });
	}

	const refreshToken = cookies.token;

	jwt.verify(
		refreshToken,
		process.env.JWT_REFRESH,
		asyncHandler(async (err, decoded) => {
			if (err) {
				return res.status(403).json({ message: 'Forbidden.' });
			}

			const user = await User.findOne({ email: decoded.email });

			if (!user) {
				return res.status(401).json({ message: 'Unauthorized.' });
			}

			const accessToken = jwt.sign(
				{
					userInfo: {
						email: user.email,
						admin: user.admin,
					},
				},
				process.env.JWT_ACCESS,
				{ expiresIn: '1h' },
			);

			res.json({ accessToken });
		}),
	);
});

//  desc     Logout user
//  route    POST /api/auth/logout
//  access   Public
const logoutUser = asyncHandler(async (req, res) => {
	const cookies = req.cookies;

	if (!cookies?.token) {
		return res.sendStatus(204);
	}

	res.clearCookie('token', {
		httpOnly: true,
		secure: true,
		sameSite: 'None',
	});

	res.json({ message: 'User logged out.' });
});

export { loginUser, refreshUser, logoutUser };
