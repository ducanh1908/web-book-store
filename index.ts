import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import multer from 'multer';
import { route } from './src/route/route';

const PORT = 3000;
const app = express();

const DB_LOCALHOST = 'mongodb+srv://root:admin123@cluster0.hi5mydw.mongodb.net/web-book'
mongoose.connect(`${DB_LOCALHOST}`)
.then(()=>{
    console.log('DB connect success');
})
.catch(e =>{
    console.log(e);
})
app.use(bodyParser.json());
app.use(express.json())
app.use('', route)

app.listen(PORT,()=>{
    console.log(`App is running http://localhost:${PORT} `);
})