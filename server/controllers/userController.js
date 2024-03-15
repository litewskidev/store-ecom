import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//  desc     Register a new user
//  route    POST /api/users
//  access   Public
const registerUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error('User already exists.');
	}

	const user = await User.create({
		email,
		password,
	});

	if (user) res.status(200).json({ message: 'User registered.' });
});

//  desc     Get user profile
//  route    GET /api/users/profile
//  access   Private
const getUserProfile = asyncHandler(async (req, res) => {
	const { userInfo } = req.body;
	const user = await User.findOne(userInfo.email);

	res.status(200).json(user);
});

//  desc     Update user profile
//  route    PUT /api/users/profile
//  access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

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

		res.status(200).json({
			id: user._id,
			email: user.email,
			emailVerified: user.emailVerified,
			name: updatedUser.name,
			surname: updatedUser.surname,
			address: {
				country: updatedUser.address.country,
				street1: updatedUser.address.street1,
				street2: updatedUser.address.street2,
				city: updatedUser.address.city,
				state: updatedUser.address.state,
				zip: updatedUser.address.zip,
			},
			addressShipping: {
				country: updatedUser.addressShipping.country,
				street1: updatedUser.addressShipping.street1,
				street2: updatedUser.addressShipping.street2,
				city: updatedUser.addressShipping.city,
				state: updatedUser.addressShipping.state,
				zip: updatedUser.addressShipping.zip,
			},
			image: updatedUser.image,
			history: updatedUser.history,
			wishlist: updatedUser.wishlist,
		});
	} else {
		res.status(404);
		throw new Error('User not found.');
	}

	res.status(200).json({ message: 'User profile updated.' });
});

export { registerUser, getUserProfile, updateUserProfile };
