import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

//  CORS
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

//  PARSING
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
} else {
  app.get('/', (req, res) => { res.send('Server is ready.')})
}

//  PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
