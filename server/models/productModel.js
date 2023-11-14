import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    name: {
      type: String
    },
    colors: {
      type: String
    },
    sizes: {
      type: String
    },
    price: {
      type: String
    },
    quantity: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
