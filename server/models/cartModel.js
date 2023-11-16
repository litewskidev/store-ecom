import mongoose from 'mongoose';

const cartSchema = mongoose.Schema(
  {
    userId: {
      type: String
    },
    items: {
      productId: {
        type: String
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  }
);

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
