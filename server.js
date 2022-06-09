const express = require("express");
const app = express();
const PORT = 3000;
/*const res = require('express/lib/response');
const { json } = require('express/lib/response');*/

app.get("/", (req,res) => {
    console.log("hello")
});

const arrayObject = [
    { id: 1, productName: 'T-Shirt', price: 4800},
    { id: 2, productName: 'Jacket', price: 19800},
    { id: 3, productName: 'Pants', price: 9800},
];

//Json返却
app.get("/http://localhost:3000/api/cart", (req, res) => {
    const url = new URL(req);
    const params = new URLSearchParams(url.search);
    const productId = params.get('product_id');
    const amount =params.get('amount'); 
    const items = (productID, amount) => {
        if(arrayObject.find((v) => v.id === productId) === undefined){
            res.sendStatus = (404);
        }else if(amount == 0){
            res.sendStatus = (404);
        }else{
            const result= arrayObject.find((v) => v.id === productId);
            res.json(`productName: ${result.productName}`);
            res.json(`productId: ${productId}`);
            res.json(`subtotal: ${amount}`);
            res.json(`price: ${result.price*amount}`);
        }
    }
    items(productId,amount)
    res.json({items});
});

app.listen(PORT, () => console.log("server listening on port"));


