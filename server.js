const express = require("express");
const app = express();
const PORT = 3000;
/*const res = require('express/lib/response');
const { json } = require('express/lib/response');*/
/*
app.get("/", (req,res) => {
    res.json({ id: 1, productName: 'T-Shirt', price: 4800})
});
*/
//Json返却
app.get("/api/cart", (req, res) => {
    const arrayObject = [
        { id: 1, productName: 'T-Shirt', price: 4800},
        { id: 2, productName: 'Jacket', price: 19800},
        { id: 3, productName: 'Pants', price: 9800},
    ];
    const productId = req.query.product_id;
    const amount =req.query.amount; 
    const items = (productId, amount) => {
        const result = arrayObject.find((v) => v.id === productId);
        if(result === undefined){
            res.sendStatus = (404);
        }else if(amount === 0){
            console.log(`productName: ${result.productName},`);
            console.log(`productId: ${productId},`);
        }else{
            console.log(`productName: ${result.productName},`);
            console.log(`productId: ${productId},`);
            console.log(`subtotal: ${amount},`);
            console.log(`price: ${result.price*amount}`);
        }
    }
    const jsonData = JSON.stringify(items);
    res.json({jsonData});
});

app.listen(PORT, () => console.log("Application started"));


