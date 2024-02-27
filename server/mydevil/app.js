const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

////  MONGO
const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${connection.connection.host}`);
	} catch (err) {
		console.error(`Error ${err.message}`);
		process.exit(1);
	}
};
////

////  MODELS
//  USER MODEL
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
//  user hash password
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});
//  user password match
userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};
const User = mongoose.model('User', userSchema);

//  PRODUCT MODEL
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
);
const Product = mongoose.model('Product', productSchema);

//  BRAND MODEL
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

//  STORE MODEL
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

//  order model

//  payment model

//  cart model
////

////  TOKEN
const generateToken = (res, userId) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: '60d',
	});

	res.cookie('token', token, {
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24,
	});
};
////

////  CONTROLLERS
//  USER CONTROLLER
//  desc     Authorize user / set token
//  route    POST /api/users/auth
//  access   Public
const authorizeUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		generateToken(res, user._id);
		res.status(201);
	} else {
		throw new Error('Invalid email or password.');
	}

	res.status(200).json({ message: 'User logged in.' });
});

//  desc     Register a new user
//  route    POST /api/users
//  access   Public
const registerUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error('User already exists.');
	}

	const user = await User.create({
		email,
		password,
	});

	if (user) res.status(200).json({ message: 'User registered.' });
});

//  desc     Logout user
//  route    POST /api/user/logout
//  access   Public
const logoutUser = asyncHandler(async (req, res) => {
	res.cookie('token', '', {
		httpOnly: true,
		expires: new Date(0),
	});

	res.status(200).json({ message: 'User logged out.' });
});

//  desc     Get user profile
//  route    GET /api/users/profile
//  access   Private
const getUserProfile = asyncHandler(async (req, res) => {
	const user = {
		id: req.user._id,
		email: req.user.email,
		emailVerified: req.user.emailVerified,
		name: req.user.name,
		surname: req.user.surname,
		address: {
			country: req.user.address.country,
			street1: req.user.address.street1,
			street2: req.user.address.street2,
			city: req.user.address.city,
			state: req.user.address.state,
			zip: req.user.address.zip,
		},
		addressShipping: {
			country: req.user.addressShipping.country,
			street1: req.user.addressShipping.street1,
			street2: req.user.addressShipping.street2,
			city: req.user.addressShipping.city,
			state: req.user.addressShipping.state,
			zip: req.user.addressShipping.zip,
		},
		image: req.user.image,
		history: req.user.history,
		wishlist: req.user.wishlist,
	};

	res.status(200).json(user);
});

//  desc     Update user profile
//  route    PUT /api/users/profile
//  access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		user.name = req.body.name || user.name;
		user.surname = req.body.surname || user.surname;
		user.address.country = req.body.country || user.address.country;
		user.address.street1 = req.body.street1 || user.address.street1;
		user.address.street2 = req.body.street2 || user.address.street2;
		user.address.city = req.body.city || user.address.city;
		user.address.state = req.body.state || user.address.state;
		user.address.zip = req.body.zip || user.address.zip;
		user.addressShipping.country =
			req.body.shippingCountry || user.addressShipping.country;
		user.addressShipping.street1 =
			req.body.shippingStreet1 || user.addressShipping.street1;
		user.addressShipping.street2 =
			req.body.shippingStreet2 || user.addressShipping.street2;
		user.addressShipping.city =
			req.body.shippingCity || user.addressShipping.city;
		user.addressShipping.state =
			req.body.shippingState || user.addressShipping.state;
		user.addressShipping.zip = req.body.shippingZip || user.addressShipping.zip;
		user.history = req.body.history || user.history;
		user.wishlist = req.body.wishlist || user.wishlist;

		if (req.file) {
			user.image = req.file.filename || user.image;
		}

		const updatedUser = await user.save();

		res.status(200).json({
			id: user._id,
			email: user.email,
			emailVerified: user.emailVerified,
			name: updatedUser.name,
			surname: updatedUser.surname,
			address: {
				country: updatedUser.address.country,
				street1: updatedUser.address.street1,
				street2: updatedUser.address.street2,
				city: updatedUser.address.city,
				state: updatedUser.address.state,
				zip: updatedUser.address.zip,
			},
			addressShipping: {
				country: updatedUser.addressShipping.country,
				street1: updatedUser.addressShipping.street1,
				street2: updatedUser.addressShipping.street2,
				city: updatedUser.addressShipping.city,
				state: updatedUser.addressShipping.state,
				zip: updatedUser.addressShipping.zip,
			},
			image: updatedUser.image,
			history: updatedUser.history,
			wishlist: updatedUser.wishlist,
		});
	} else {
		res.status(404);
		throw new Error('User not found.');
	}

	res.status(200).json({ message: 'User profile updated.' });
});

//  PRODUCT CONTROLLER
//  desc     Get all products
//  route    GET /api/products
//  access   Public
const getAllProducts = asyncHandler(async (req, res) => {
	const queryCategory = req.query.category;
	const queryCollection = req.query.collection;
	const queryBrand = req.query.brand;
	const queryStyle = req.query.style;
	let products;

	if (queryCategory) {
		products = await Product.find({
			categories: {
				$in: [queryCategory],
			},
		});
	} else if (queryCollection) {
		products = await Product.find({
			collections: {
				$in: [queryCollection],
			},
		});
	} else if (queryBrand) {
		products = await Product.find({
			'brand.href': queryBrand,
		});
	} else if (queryStyle) {
		products = await Product.find({
			'features.details.style': {
				$in: [queryStyle],
			},
		});
	} else {
		products = await Product.find();
	}

	if (products) res.status(200).json(products);
});

//  desc     Get new products
//  route    GET /api/products/new
//  access   Public
const getNewProducts = asyncHandler(async (req, res) => {
	const products = await Product.find().sort({ createdAt: -1 }).limit(10);

	if (products) res.status(200).json(products);
});

//  desc     Get product
//  route    GET /api/products
//  access   Public
const getProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) res.status(200).json(product);
});

//  desc     Add new product
//  route    POST /api/products/add
//  access   Private
const addProduct = asyncHandler(async (req, res) => {
	const { sku } = req.body;
	const productExists = await Product.findOne({ sku });

	if (productExists) {
		res.status(400);
		throw new Error('Product already exists.');
	}

	const product = new Product(req.body);
	const newProduct = product.save();

	if (newProduct)
		res.status(200).json({ message: 'Product added successfully.' });
});

//  desc     Update product
//  route    PUT /api/products/update
//  access   Private
const updateProduct = asyncHandler(async (req, res) => {
	const updatedProduct = await Product.findByIdAndUpdate(
		req.body.id,
		{
			$set: req.body,
		},
		{ new: true },
	);

	if (updatedProduct) {
		res.status(200).json({ message: 'Product updated successfully.' });
	} else {
		res.status(404);
		throw new Error('Product not found.');
	}
});

//  desc     Delete product
//  route    DELETE /api/products/delete
//  access   Private
const deleteProduct = asyncHandler(async (req, res) => {
	const deletedProduct = await Product.findByIdAndDelete(req.body.id);

	if (deletedProduct) {
		res.status(200).json({ message: 'Product deleted successfully.' });
	} else {
		res.status(404);
		throw new Error('Product not found.');
	}
});

//  BRAND CONTROLLER
//  desc     Get all brands
//  route    GET /api/brands
//  access   Public
const getAllBrands = asyncHandler(async (rea, res) => {
	const brands = await Brand.find();

	if (brands) res.status(200).json(brands);
});

//  desc     Get brand
//  route    GET /api/brands
//  access   Public
const getBrand = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const brand = await Brand.findOne({ id });

	if (brand) {
		res.status(200).json(brand);
	} else {
		res.status(404);
		throw new Error('Brand not found.');
	}
});

//  desc     Add new brand
//  route    POST /api/brands/add
//  access   Private
const addBrand = asyncHandler(async (req, res) => {
	const { id } = req.body;
	const brandExists = await Brand.findOne({ id });

	if (brandExists) {
		res.status(400);
		throw new Error('Brand already exists.');
	}

	const brand = new Brand(req.body);
	const newBrand = brand.save();

	if (newBrand) res.status(200).json({ message: 'Brand added successfully.' });
});

//  desc     Update brand
//  route    PUT /api/brands/update
//  access   Private
const updateBrand = asyncHandler(async (req, res) => {
	const updatedBrand = await Brand.findByIdAndUpdate(
		req.body.id,
		{
			$set: req.body,
		},
		{ new: true },
	);

	if (updatedBrand) {
		res.status(200).json({ message: 'Brands updated successfully.' });
	} else {
		res.status(404);
		throw new Error('Brand not found.');
	}
});

//  desc     Delete brand
//  route    DELETE /api/brands/delete
//  access   Private
const deleteBrand = asyncHandler(async (req, res) => {
	const deletedBrand = await Brand.findByIdAndDelete(req.body.id);

	if (deletedBrand) {
		res.status(200).json({ message: 'Brand deleted successfully.' });
	} else {
		res.status(404);
		throw new Error('Brand not found.');
	}
});

//  STORE CONTROLLERS
//  desc     Get all stores
//  route    GET /api/stores
//  access   Public
const getAllStores = asyncHandler(async (req, res) => {
	const stores = await Store.find();

	if (stores) res.status(200).json(stores);
});

//  desc     Get store
//  route    GET /api/stores/:id
//  access   Public
const getStore = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const store = await Store.findOne({ id });

	if (store) {
		res.status(200).json(store);
	} else {
		res.status(404);
		throw new Error('Store not found.');
	}
});

//  desc     Add new store
//  route    POST /api/stores/add
//  access   Private
const addStore = asyncHandler(async (req, res) => {
	const { id } = req.body;
	const storeExists = await Store.findOne({ id });

	if (storeExists) {
		res.status(400);
		throw new Error('Store already exists.');
	}

	const store = new Store(req.body);
	const newStore = store.save();

	if (newStore) res.status(200).json({ message: 'Store added successfully.' });
});

//  desc     Update store
//  route    PUT /api/stores/update
//  access   Private
const updateStore = asyncHandler(async (req, res) => {
	const updatedStore = await Store.findByIdAndUpdate(
		req.body.id,
		{
			$set: req.body,
		},
		{ new: true },
	);

	if (updatedStore) {
		res.status(200).json({ message: 'Store updated successfully.' });
	} else {
		res.status(404);
		throw new Error('Store not found.');
	}
});

//  desc     Delete store
//  route    DELETE /api/stores/delete
//  access   Private
const deleteStore = asyncHandler(async (req, res) => {
	const deletedStore = await Store.findByIdAndDelete(req.body.id);

	if (deletedStore) {
		res.status(200).json({ message: 'Store deleted successfully.' });
	} else {
		res.status(404);
		throw new Error('Store not found.');
	}
});

//  order controller

//  payment controller

//  cart controller
////

////  PROTECT ROUTES
const protect = asyncHandler(async (req, res, next) => {
	let token;
	token = req.cookies.token;

	if (token) {
		try {
			const verified = jwt.verify(token, process.env.JWT_SECRET);

			req.user = await User.findById(verified.userId).select('-password');
			next();
		} catch (err) {
			res.status(403);
			throw new Error('Not authorized. Invalid token.');
		}
	} else {
		res.status(401);
		throw new Error('Not authorized. Token not found.');
	}
});
////

////  ROUTES
//  USER ROUTES
const userRouter = express.Router();
userRouter.post('/', registerUser);
userRouter.post('/auth', authorizeUser);
userRouter.post('/logout', logoutUser);
userRouter
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

//  PRODUCT ROUTES
const productRouter = express.Router();
productRouter.get('/', getAllProducts);
productRouter.get('/new', getNewProducts);
productRouter.get('/:id', getProduct);
productRouter.post('/add', protect, addProduct);
productRouter.put('/update', protect, updateProduct);
productRouter.delete('/delete', protect, deleteProduct);

//  BRAND ROUTES
const brandRouter = express.Router();
brandRouter.get('/', getAllBrands);
brandRouter.get('/:id', getBrand);
brandRouter.post('/add', protect, addBrand);
brandRouter.put('/update', protect, updateBrand);
brandRouter.delete('/delete', protect, deleteBrand);

//  STORE ROUTES
const storeRouter = express.Router();
storeRouter.get('/', getAllStores);
storeRouter.get('/:id', getStore);
storeRouter.post('/add', protect, addStore);
storeRouter.put('/update', protect, updateStore);
storeRouter.delete('/delete', protect, deleteStore);

//  order routes

//  payment routes

//  cart routes
////

////  ERROR HANDLERS
const notFound = (req, res, next) => {
	const err = new Error(`Not found ${req.originalUrl}`);
	res.status(404);
	next(err);
};
const errorHandler = (err, req, res, next) => {
	let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	let message = err.message;

	if (err.name === 'CastError' && err.kind === 'ObjectId') {
		statusCode = 404;
		message = 'Resource not found';
	}

	res.status(statusCode).json({
		message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	});
};
////

////  SERVER
dotenv.config();
connectDB();
const app = express();

//  middleware
app.use(
	cors({ origin: 'https://culture.litewskidev.usermd.net', credentials: true }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//  static
app.use(
	express.static(path.join(__dirname, 'public'), {
		maxAge: 31536000,
	}),
);

//  routes
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/brands', brandRouter);
app.use('/api/stores', storeRouter);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

//  error handlers
app.use(notFound);
app.use(errorHandler);

//  port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
////
