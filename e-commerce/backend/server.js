import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import { notfound, errorHandler } from './middleware/errorMiddleWare.js';
const port = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('YO');
})

app.use('/api/products', productRoutes);

app.use(notfound);
app.use(errorHandler);


app.listen(port, () =>  console.log(`Running on ${port}`));