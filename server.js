const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api/cart", (req, res) => {
    const arrayObject = [
        { productName: 'T-Shirt', id: '1', price: 4800},
        { productName: 'Jacket', id: '2', price: 19800},
        { productName: 'Pants', id: '3',  price: 9800},
    ];
    const productId = req.query.product_id;
    const amount =req.query.amount; 
    const result = arrayObject.find(v => v.id === productId)

    console.log(amount);
    
    if (result === undefined || amount === "") {
    return res.sendStatus(404);
    }else if(amount === "0"){
    return res.json(result);
    }else {
        result.amount = amount
        result.subtotal = result.price*amount
        return res.json(result);
    }
});

app.listen(PORT, () => console.log("Application started"));


