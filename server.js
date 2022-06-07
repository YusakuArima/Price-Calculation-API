const express = require('express');
const { json } = require('express/lib/response');
const app = express();
const PORT = 3000;


//アプリ内データ
const arrayObject = [
    { id: 1, productName: 'T-Shirt', price: 4800},
    { id: 2, productName: 'Jacket', price: 19800},
    { id: 3, productName: 'Pants', price: 9800},
];

//URLからのIDの取得
const url = new URL('http://localhost:3000/api/cart?product_id=1&amount=2');
const params = new URLSearchParams(url.search);
const productId = params.get('product_id');
const amount =params.get('amount');

//引数に商品IDを受け取ると、対応した商品データのObjectを返す関数を書く
const items = (productID, amount) => {
//要修正
    if(productID === undefined){
        console.log('404')
    }else if(amount === undefined){
        console.log('404')
    }else{
        console.log(`productName: ${arrayObject[productID - 1].productName}`);
        console.log(`productId: ${productID}`);
        console.log(`subtotal: ${amount}`)
        console.log(`price: ${arrayObject[productID - 1].price*amount}`);
    }
}
items(productId,amount);

/*次回：
下記の実装
「商品ID、個数どちらかがリクエストに足りない場合、リクエスト時の商品IDに対応する商品がない場合は、レスポンスコード404を返す」
JSONで返却できるようにする。
*/


app.listen(PORT, () =>console.log('OPEN'));