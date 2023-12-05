import asyncHandler from 'express-async-handler';
import Product from '../models/admin/productModel.js';

//  desc     Get all products
//  route    GET /api/products
//  access   Public
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  if(products)
  res.status(200).json(products);
});

//  desc     Add new product
//  route    POST /api/products/add
//  access   Private
const addProduct = asyncHandler(async (req, res) => {
  const { sku } = req.body;

  const productExists = await Product.findOne({ sku });
  if(productExists) {
    res.status(400);
    throw new Error('Product already exists.');
  }

  const product = new Product(req.body);
  const newProduct = product.save();

  if(newProduct)
  res.status(200).json( {message: 'Product added successfully.'} )
});

//  desc     Update product
//  route    PUT /api/products/update
//  access   Private
const updateProduct = asyncHandler(async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    { new: true }
  );
  if(updatedProduct) {
  res.status(200).json( {message: 'Product updated successfully.'} );
  }
  else {
    res.status(404);
    throw new Error('Product not found.')
  }
});

//  desc     Delete product
//  route    DELETE /api/products/delete
//  access   Private
const deleteProduct = asyncHandler(async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  if(deletedProduct) {
  res.status(200).json( {message: 'Product deleted successfully.'} );
  }
  else {
    res.status(404);
    throw new Error('Product not found.')
  }
});

export { getAllProducts, addProduct, updateProduct, deleteProduct };
