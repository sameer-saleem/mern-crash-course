// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.js';

dotenv.config();

const app = express();

app.use(express.json()); // allow us to send json data in the req.body

// app.get("/products", (req, res)=>{});
app.post("/api/products", async (req, res) => {
    const product = req.body; // user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: 'Please provide all fields' });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    } catch (error) {
        console.error('Error in creat Product:', error.message);
        res.status(500).json({success: false, message: 'Server Error'});
    }
});

// console.log(process.env.MONGO_URI);


// Post Man 

app.listen(5000, () => {
    connectDB();
    console.log('Server started at localhost:5000');
});


//     A             P             I        = API
// Application  Programming    Interface


// 31:38 Last watched