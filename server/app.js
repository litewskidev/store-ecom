import dotenv from 'dotenv';
import connectDB from './config/db.js';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { errorHandler, notFound } from './middleware/errorsMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import paymentRouter from './routes/paymentRoutes.js';
import brandRouter from './routes/brandRoutes.js';

dotenv.config();
connectDB();
const app = express();

//  CORS
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//  PARSING
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//  ROUTES
app.use('/api/users', userRoutes);
app.use('/api/products', productRouter);
app.use('/api/brands', brandRouter);
app.use('/api/carts', cartRouter);
app.use('/api/orders', orderRouter);
app.use('/api/payments', paymentRouter);

//  STATIC
if (process.env.NODE_ENV === 'production') {
	const __dirname = path.resolve();
	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
	);
} else {
	app.get('/', (req, res) => {
		res.send('Server is ready.');
	});
}

//  ERROR HANDLERS
app.use(notFound);
app.use(errorHandler);

//  PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
