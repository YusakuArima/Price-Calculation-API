module.exports = {
// 商品を探すサービス
itemFind: (productId) => {
    const arrayObject = [
        { productName: 'T-Shirt', id: '1', price: 4800},
        { productName: 'Jacket', id: '2', price: 19800},
        { productName: 'Pants', id: '3',  price: 9800},
    ];
    const items = arrayObject.find(v => v.id === productId);
    return items;},

calcTotal: (itemPrice, itemAmount) => {
    const result = itemPrice*itemAmount;
    return result;
}
}
