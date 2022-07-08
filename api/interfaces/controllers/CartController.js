//ProductServiceから必要なモデュールを呼ぶ。
const ProductService = require('../../services/ProductService');

class CartController {
    static show(req, res) {
        try {
            const product = ProductService.find(req.query.product_Id);
            const total = calcTotal(product.price*req.query.amount)
            res.status(200).send(...product, ...total);
        } catch(e) {
            //ここのエラーが出力されてしまう、、
            return res.sendStatus(404);
        }
    }
};

module.exports = CartController;