const db = require('../models/index');

module.exports = {
// 商品を探すサービス
itemFind: async (productId) => {
    const items = await db.Products.findAll({
        raw: true,
        where: {
        id : productId
        }
    }).then(results => {
        return results;
    }).catch(error => 
        console.log(error));  
    return items[0]},

calcTotal: (itemPrice, itemAmount) => {
    const result = itemPrice*itemAmount;
    const amountAndTotal = {amount: itemAmount, subtotal: result}
    return amountAndTotal;
    }
}
