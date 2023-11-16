import mongoose from 'mongoose';

const paymentModel = mongoose.Schema(
  {
    userId: {
      type: String
    },
    status: {
      type: String
    },
    gateway: {
      type: String
    },
    type: {
      type: String
    },
    amount: {
      type: Number
    },
    card: {
      brand: {
        type: String
      },
      panLastFour: {
        type: Number
      },
      expirationMonth: {
        type: Number
      },
      expirationYear: {
        type: Number
      },
      cvvVerified: {
        type: Boolean
      }
    },
    token: {
      type: String
    }
  }
);

const Payment = mongoose.model('Payment', paymentModel);

export default Payment;
