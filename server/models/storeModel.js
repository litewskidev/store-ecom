import mongoose from 'mongoose';

const storeSchema = mongoose.Schema(
	{
		id: {
			type: String,
			unique: true,
		},
		city: {
			type: String,
		},
		contact: {
			address: {
				type: String,
			},
			openHours: {
				type: String,
			},
			phoneNumber: {
				type: String,
			},
			email: {
				type: String,
			},
			href: {
				type: String,
			},
		},
		info: {
			type: Array,
		},
		details: {
			type: String,
		},
	},
	{
		timestamps: true,
	},
);

const Store = mongoose.model('Store', storeSchema);

export default Store;
