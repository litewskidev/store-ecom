import asyncHandler from 'express-async-handler';
import Store from '../models/storeModel.js';

//  desc     Get all stores
//  route    GET /api/stores
//  access   Public
const getAllStores = asyncHandler(async (req, res) => {
	const stores = await Store.find();

	if (stores) res.status(200).json(stores);
});

//  desc     Get store
//  route    GET /api/stores/:id
//  access   Public
const getStore = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const store = await Store.findOne({ id });

	if (store) {
		res.status(200).json(store);
	} else {
		res.status(404);
		throw new Error('Store not found.');
	}
});

//  desc     Add new store
//  route    POST /api/stores/add
//  access   Private
const addStore = asyncHandler(async (req, res) => {
	const { id } = req.body;
	const storeExists = await Store.findOne({ id });

	if (storeExists) {
		res.status(400);
		throw new Error('Store already exists.');
	}

	const store = new Store(req.body);
	const newStore = store.save();

	if (newStore) res.status(200).json({ message: 'Store added successfully.' });
});

//  desc     Update store
//  route    PUT /api/stores/update
//  access   Private
const updateStore = asyncHandler(async (req, res) => {
	const updatedStore = await Store.findByIdAndUpdate(
		req.body._id,
		{
			$set: req.body,
		},
		{ new: true },
	);

	if (updatedStore) {
		res.status(200).json({ message: 'Store updated successfully.' });
	} else {
		res.status(404);
		throw new Error('Store not found.');
	}
});

//  desc     Delete store
//  route    DELETE /api/stores/delete
//  access   Private
const deleteStore = asyncHandler(async (req, res) => {
	const deletedStore = await Store.findByIdAndDelete(req.body.id);

	if (deletedStore) {
		res.status(200).json({ message: 'Store deleted successfully.' });
	} else {
		res.status(404);
		throw new Error('Store not found.');
	}
});

export { getAllStores, getStore, addStore, updateStore, deleteStore };
