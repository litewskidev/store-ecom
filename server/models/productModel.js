import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
	{
		sku: {
			type: String,
			unique: true,
		},
		reference: {
			type: String,
		},
		brand: {
			name: {
				type: String,
			},
			href: {
				type: String,
			},
		},
		model: {
			type: String,
		},
		price: {
			base: {
				type: Number,
			},
			currency: {
				type: String,
				default: '$',
			},
			discount: {
				type: Number,
			},
		},
		year: {
			type: Number,
		},
		description: {
			type: String,
		},
		features: {
			details: {
				origin: {
					type: String,
				},
				style: {
					type: Array,
				},
				gender: {
					type: String,
				},
			},
			case: {
				size: {
					type: String,
				},
				material: {
					type: String,
				},
				back: {
					type: String,
				},
				shape: {
					type: String,
				},
				waterResistance: {
					type: String,
				},
			},
			dial: {
				color: {
					type: String,
				},
				hoursMarkers: {
					type: String,
				},
			},
			function: {
				movement: {
					type: String,
				},
				complications: {
					type: Array,
				},
			},
			strapBracelet: {
				material: {
					type: String,
				},
				bandColor: {
					type: String,
				},
				buckleType: {
					type: String,
				},
				length: {
					type: String,
				},
			},
		},
		categories: {
			type: Array,
		},
		collections: {
			type: Array,
		},
		images: {
			type: Array,
		},
		warranty: {
			type: String,
		},
		inStock: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
	},
)

const Product = mongoose.model('Product', productSchema)

export default Product
