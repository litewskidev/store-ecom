import dotenv from 'dotenv';
import connectDB from './config/db.js';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { errorHandler, notFound } from './middleware/errorsMiddleware.js';
import userRoutes from './routes/userRoutes.js';

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

//  STATIC
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
} else {
  app.get('/', (req, res) => { res.send('Server is ready.')})
}

//  ERROR HANDLERS
app.use(notFound);
app.use(errorHandler);

//  PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
