import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

//  desc     Register a new user
//  route    POST /api/users/register
//  access   Public
const registerUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ message: 'All fields are required.' });
	}

	const userExists = await User.findOne({ email }).lean().exec();

	if (userExists) {
		return res.status(409).json({ message: 'User already exists.' });
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await User.create({
		email,
		hashedPassword,
	});

	if (user) {
		res.status(200).json({ message: 'User registered.' });
	} else {
		res.status(400).json({ message: 'Invalid user data.' });
	}
});

//  desc     Get all users
//  route    GET /api/users/all
//  access   Private
const getAllUsers = asyncHandler(async (req, res) => {
	const users = await User.find().select('-password').lean();

	if (!users) {
		return res.status(400).json({ message: 'No users found.' });
	}

	res.status(200).json(users);
});

//  desc     Update user profile
//  route    PUT /api/users/update
//  access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
	const { email } = req.body;
	const user = await User.findOne({ email }).select('-password').lean().exec();

	if (user) {
		user.name = req.body.name || user.name;
		user.surname = req.body.surname || user.surname;
		user.address.country = req.body.country || user.address.country;
		user.address.street1 = req.body.street1 || user.address.street1;
		user.address.street2 = req.body.street2 || user.address.street2;
		user.address.city = req.body.city || user.address.city;
		user.address.state = req.body.state || user.address.state;
		user.address.zip = req.body.zip || user.address.zip;
		user.addressShipping.country =
			req.body.shippingCountry || user.addressShipping.country;
		user.addressShipping.street1 =
			req.body.shippingStreet1 || user.addressShipping.street1;
		user.addressShipping.street2 =
			req.body.shippingStreet2 || user.addressShipping.street2;
		user.addressShipping.city =
			req.body.shippingCity || user.addressShipping.city;
		user.addressShipping.state =
			req.body.shippingState || user.addressShipping.state;
		user.addressShipping.zip = req.body.shippingZip || user.addressShipping.zip;
		user.history = req.body.history || user.history;
		user.wishlist = req.body.wishlist || user.wishlist;

		if (req.file) {
			user.image = req.file.filename || user.image;
		}

		const updatedUser = await user.save();

		res.status(200).json({ message: `${updatedUser.name} profile updated.` });
	} else {
		res.status(404).json({ message: 'User not found.' });
	}
});

/*
//  desc     Get user profile
//  route    GET /api/users/profile
//  access   Private
const getUserProfile = asyncHandler(async (req, res) => {
	const { email } = req.body;
	const user = await User.findOne({ email }).select('-password');

	res.status(200).json(user);
});
*/

export { getAllUsers, registerUser, updateUserProfile };
