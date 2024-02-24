import mongoose from 'mongoose';

const brandSchema = mongoose.Schema(
	{
		id: {
			type: String,
		},
		name: {
			type: String,
		},
		info: {
			type: String,
		},
	},
	{
		timestamps: true,
	},
);

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;
