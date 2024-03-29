import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		admin: {
			type: Boolean,
			default: false,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		emailVerified: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
		},
		surname: {
			type: String,
		},
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
		addressShipping: {
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
		image: {
			type: String,
		},
		history: {
			type: Object,
		},
		wishlist: {
			type: Object,
		},
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model('User', userSchema);

export default User;
