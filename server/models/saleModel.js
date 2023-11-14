import mongoose from 'mongoose';

const saleSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    order: {
      type: String
    },
    customer: {
      name: {
        type: String
      },
      address: {
        type: String
      }
    },
    payment: {
      type: String
    },
    delivery: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Sale = mongoose.model('Sale', saleSchema);

export default Sale;
