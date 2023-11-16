import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    sku: {
      type: String,
      unique: true
    },
    title: {
      type: String
    },
    quantity: {
      type: Number
    },
    price: {
      base : {
        type: Number
      },
      currency: {
        type: String
      },
      discount: {
        type: Number
      }
    },
    options: {
      features: {
        type: Array
      },
      sizes: {
        type: Array
      },
      colors: {
        type: Array
      },
      image: {
        type: String
      }
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
