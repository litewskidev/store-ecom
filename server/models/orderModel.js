import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
	{
		userId: {
			type: String,
		},
		paymentId: {
			type: Object,
		},
		paymentStatus: {
			type: String,
		},
		status: {
			type: String,
		},
		currency: {
			type: String,
		},
		products: {
			type: Array,
		},
		shipping: {
			address: {
				country: {
					type: String,
				},
				street1: {
					type: String,
				},
				street2: {
					type: String,
				},
				city: {
					type: String,
				},
				state: {
					type: String,
				},
				zip: {
					type: String,
				},
			},
			origin: {
				country: {
					type: String,
				},
				street1: {
					type: String,
				},
				street2: {
					type: String,
				},
				city: {
					type: String,
				},
				state: {
					type: String,
				},
				zip: {
					type: String,
				},
			},
		},
		carrier: {
			type: String,
		},
		tracking: {
			type: String,
		},
	},
	{
		timestamps: true,
	},
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
