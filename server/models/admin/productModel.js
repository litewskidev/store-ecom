import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    sku: {
      type: String,
      unique: true
    },
    reference: {
      type: String,
      unique: true
    },
    brand: {
      type: String
    },
    model: {
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
    certificates: {
      box: {
        type: Boolean
      },
      papers: {
        type: Boolean
      },
      warranty: {
        type: String
      }
    },
    year: {
      type: Number
    },
    images: {
      type: String
    },
    description: {
      type: String
    },
    features: {
      details: {
        origin: {
          type: String
        },
        style: {
          type: String
        },
        gender: {
          type: String
        }
      },
      case: {
        size: {
          type: String
        },
        material: {
          type: String
        },
        back: {
          type: String
        },
        shape: {
          type: String
        },
        waterResistance: {
          type: String
        },
      },
      dial: {
        color: {
          type: String
        },
        hoursMarkers: {
          type: String
        }
      },
      function: {
        movement: {
          type: String
        },
        complications: {
          type: String
        }
      },
      strapBracelet: {
        material: {
          type: String
        },
        bandColor: {
          type: String
        },
        buckleType: {
          type: String
        },
        length: {
          type: String
        }
      }
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
