// const express = require('express');
import express from 'express';

const app = express(); 

app.get("/products", (req, res)=>{
    res.send('Server is ready 123');
})

app.listen(5000, ()=>{
    console.log('Server started at localhost:120000000');
});