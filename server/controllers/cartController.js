import asyncHandler from 'express-async-handler';
import Cart from '../models/cartModel.js';

//  desc     Create Cart
//  route    POST /api/carts
//  access   Public
const createCart = asyncHandler(async (req, res) => {
	const newCart = new Cart(req.body);

	const savedCart = await newCart.save();

	if (savedCart) res.status(200).json(savedCart);
});

//  desc     Update Cart
//  route    PUT /api/carts/update
//  access   Public
const updateCart = asyncHandler(async (req, res) => {
	const updatedCart = await Cart.findByIdAndUpdate(
		req.body.id,
		{
			$set: req.body,
		},
		{ new: true },
	);
	if (updatedCart) {
		res.status(200).json(updatedCart);
	} else {
		res.status(404);
		throw new Error('Cart not found.');
	}
});

//  desc     Delete Cart
//  route    DELETE /api/carts/delete
//  access   Public
const deleteCart = asyncHandler(async (req, res) => {
	const deletedCart = await Cart.findByIdAndDelete(req.body.id);
	if (deletedCart) {
		res.status(200).json({ message: 'Cart deleted successfully.' });
	} else {
		res.status(404);
		throw new Error('Cart not found.');
	}
});

//  desc     Get User Cart
//  route    GET /api/carts/user
//  access   Private
const getUserCart = asyncHandler(async (req, res) => {
	const userCart = await Cart.findOne({ userId: req.body.id });

	if (userCart) {
		res.status(200).json(userCart);
	} else {
		res.status(404);
		throw new Error('Cart not found.');
	}
});

//  desc     Get All Carts
//  route    GET /api/carts/all
//  access   Private
const getAllCarts = asyncHandler(async (req, res) => {
	const carts = await Cart.find();

	if (carts) res.status(200).json(carts);
});

export { createCart, updateCart, deleteCart, getUserCart, getAllCarts };
