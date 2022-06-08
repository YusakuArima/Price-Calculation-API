const express = require('express');
const app = express();
const PORT = 3000;
/*const res = require('express/lib/response');
const { json } = require('express/lib/response');*/

//Json返却
app.get("/http://localhost:3000/api/cart?product_id=2&amount=1", (req, res) => {
    res.json({items});
});

//アプリ内データ
const arrayObject = [
    { id: 1, productName: 'T-Shirt', price: 4800},
    { id: 2, productName: 'Jacket', price: 19800},
    { id: 3, productName: 'Pants', price: 9800},
];

//URLからのIDの取得
const url = new URL('http://localhost:3000/api/cart?product_id=2&amount=1');
const params = new URLSearchParams(url.search);
const productId = params.get('product_id');
const amount =params.get('amount'); 

//引数に商品IDを受け取ると、対応した商品データのObjectを返す関数を書く
const items = (productID, amount) => {
//要修正
    if(arrayObject[productID - 1] === undefined){
        console.log("404");
    }else if(amount == 0){
        console.log("404");
    }else{
        console.log(`productName: ${arrayObject[productID - 1].productName}`);
        console.log(`productId: ${productID}`);
        console.log(`subtotal: ${amount}`);
        console.log(`price: ${arrayObject[productID - 1].price*amount}`);
    }
}
items(productId,amount);

/*レスポンスコード
res.sendStatus = (404);*/

