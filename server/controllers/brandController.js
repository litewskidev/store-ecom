import asyncHandler from 'express-async-handler';
import Brand from '../models/brandModel.js';

//  desc     Get all brands
//  route    GET /api/brands
//  access   Public
const getAllBrands = asyncHandler(async (rea, res) => {
	const brands = await Brand.find();

	if (brands) res.status(200).json(brands);
});

//  desc     Get brand
//  route    GET /api/brands
//  access   Public
const getBrand = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const brand = await Brand.findOne({ id });

	if (brand) {
		res.status(200).json(brand);
	} else {
		res.status(404);
		throw new Error('Brand not found.');
	}
});

//  desc     Add new brand
//  route    POST /api/brands/add
//  access   Private
const addBrand = asyncHandler(async (req, res) => {
	const { id } = req.body;
	const brandExists = await Brand.findOne({ id });

	if (brandExists) {
		res.status(400);
		throw new Error('Brand already exists.');
	}

	const brand = new Brand(req.body);
	const newBrand = brand.save();

	if (newBrand) res.status(200).json({ message: 'Brand added successfully.' });
});

//  desc     Update brand
//  route    PUT /api/brands/update
//  access   Private
const updateBrand = asyncHandler(async (req, res) => {
	const updatedBrand = await Brand.findByIdAndUpdate(
		req.body.id,
		{
			$set: req.body,
		},
		{ new: true },
	);

	if (updatedBrand) {
		res.status(200).json({ message: 'Brands updated successfully.' });
	} else {
		res.status(404);
		throw new Error('Brand not found.');
	}
});

//  desc     Delete brand
//  route    DELETE /api/brands/delete
//  access   Private
const deleteBrand = asyncHandler(async (req, res) => {
	const deletedBrand = await Brand.findByIdAndDelete(req.body.id);

	if (deletedBrand) {
		res.status(200).json({ message: 'Brand deleted successfully.' });
	} else {
		res.status(404);
		throw new Error('Brand not found.');
	}
});

export { getAllBrands, getBrand, addBrand, updateBrand, deleteBrand };
