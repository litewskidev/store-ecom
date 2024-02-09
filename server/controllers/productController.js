import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//  desc     Get all products
//  route    GET /api/products
//  access   Public
const getAllProducts = asyncHandler(async (req, res) => {
	const queryNew = req.query.new
	const queryCategory = req.query.category
	const queryCollection = req.query.collection
	const queryBrand = req.query.brand
	let products

	if (queryNew) {
		products = await Product.find().sort({ createdAt: -1 }).limit(10)
	} else if (queryCategory) {
		products = await Product.find({
			categories: {
				$in: [queryCategory],
			},
		})
	} else if (queryCollection) {
		products = await Product.find({
			collections: {
				$in: [queryCollection],
			},
		})
	} else if (queryBrand) {
		products = await Product.find({
			'brand.href': queryBrand,
		})
	} else {
		products = await Product.find()
	}

	if (products) res.status(200).json(products)
})

//  desc     Get product
//  route    GET /api/products
//  access   Public
const getProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)

	if (product) res.status(200).json(product)
})

//  desc     Add new product
//  route    POST /api/products/add
//  access   Private
const addProduct = asyncHandler(async (req, res) => {
	const { sku } = req.body
	const productExists = await Product.findOne({ sku })

	if (productExists) {
		res.status(400)
		throw new Error('Product already exists.')
	}

	const product = new Product(req.body)
	const newProduct = product.save()

	if (newProduct)
		res.status(200).json({ message: 'Product added successfully.' })
})

//  desc     Update product
//  route    PUT /api/products/update
//  access   Private
const updateProduct = asyncHandler(async (req, res) => {
	const updatedProduct = await Product.findByIdAndUpdate(
		req.body.id,
		{
			$set: req.body,
		},
		{ new: true },
	)

	if (updatedProduct) {
		res.status(200).json({ message: 'Product updated successfully.' })
	} else {
		res.status(404)
		throw new Error('Product not found.')
	}
})

//  desc     Delete product
//  route    DELETE /api/products/delete
//  access   Private
const deleteProduct = asyncHandler(async (req, res) => {
	const deletedProduct = await Product.findByIdAndDelete(req.body.id)

	if (deletedProduct) {
		res.status(200).json({ message: 'Product deleted successfully.' })
	} else {
		res.status(404)
		throw new Error('Product not found.')
	}
})

export { getAllProducts, getProduct, addProduct, updateProduct, deleteProduct }
