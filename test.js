const arrayObject = [
    { id: 1, productName: 'T-Shirt', price: 4800},
    { id: 2, productName: 'Jacket', price: 19800},
    { id: 3, productName: 'Pants', price: 9800},
];

const items = (productId, amount) => {
    if(arrayObject.find((v) => v.id === productId) === undefined){
        console.log("404");
    }else if(amount == 0){
        console.log("404");
    }else{
        const result= arrayObject.find((v) => v.id === productId);
        console.log(`productName: ${result.productName}`);
        console.log(`productId: ${productId}`);
        console.log(`subtotal: ${amount}`);
        console.log(`price: ${result.price*amount}`);
    }
}

const url = new URL('http://localhost:3000/api/cart?product_id=2&amount=1');
const params = new URLSearchParams(url.search);
const productId = params.get('product_id');
const amount =params.get('amount'); 

items(productId, amount);

/*どうして下記は動かない？

const items = (productId, amount) => {
    if(arrayObject[arrayObject.findIndex(({id}) => id === productId)] === undefined){
        console.log("404");
    }else if(amount == 0){
        console.log("404");
    }else{
        console.log(`productName: ${arrayObject[arrayObject.findIndex(({id}) => id === productId)].productName}`);
        console.log(`productId: ${productId}`);
        console.log(`subtotal: ${amount}`);
        console.log(`price: ${arrayObject[arrayObject.findIndex(({id}) => id === productId)].price*amount}`);
    }
}

items(productId,amount);
*/
