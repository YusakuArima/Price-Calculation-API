//ProductServiceから必要なモデュールを呼ぶ。
const CartService = require('../../services/CartService');

class CartController {
    static show(req, res) {
        try {
            const product = CartService.itemFind(req.query.product_id);
            const total = CartService.calcTotal(product.price, req.query.amount);
            res.status(200).send(product);
        } catch(e) {
            return res.sendStatus(404);
        }
    }
};

module.exports = CartController;