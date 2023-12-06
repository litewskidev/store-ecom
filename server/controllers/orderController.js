import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

//  desc     Create Order
//  route    POST /api/orders
//  access   Public
const createOrder = asyncHandler(async (req, res) => {
  const newOrder = new Order(req.body);

  const savedOrder = await newOrder.save();

  if(savedOrder)
  res.status(200).json(savedOrder);
});

//  desc     Update Order
//  route    PUT /api/orders/update
//  access   Public
const updateOrder = asyncHandler(async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(
    req.body.id,
    {
      $set: req.body
    },
    { new: true }
  );
  if(updatedOrder) {
  res.status(200).json(updatedOrder);
  }
  else {
    res.status(404);
    throw new Error('Order not found.');
  }
});

//  desc     Delete Order
//  route    DELETE /api/orders/delete
//  access   Private
const deleteOrder = asyncHandler(async (req, res) => {
  const deletedOrder = await Order.findByIdAndDelete(req.body.id);
  if(deletedOrder) {
  res.status(200).json( {message: 'Order deleted successfully.'} );
  }
  else {
    res.status(404);
    throw new Error('Order not found.');
  }
});

//  desc     Get User Orders
//  route    GET /api/orders/user
//  access   Private
const getUserOrders = asyncHandler(async (req, res) => {
  const userOrders = await Order.find( {userId: req.body.id} );

  if(userOrders) {
    res.status(200).json(userOrders);
  }
  else {
    res.status(404);
    throw new Error('Orders not found.');
  }
});

//  desc     Get All Orders
//  route    GET /api/orders/all
//  access   Private
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();

  if(orders)
  res.status(200).json(orders);
});

export { createOrder, updateOrder, deleteOrder, getUserOrders, getAllOrders };
