import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
dotenv.config();

const app = express();

app.get('/', (req, res) => {0
  res.send('Hello World!');
});

app.listen(process.env.APP_PORT, process.env.APP_HOST,() => {
  connectDB();
  console.log(`Server is running on ${process.env.APP_HOST}:${process.env.APP_PORT}`);
});

