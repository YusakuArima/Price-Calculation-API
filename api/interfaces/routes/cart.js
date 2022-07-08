//URLを取得
const app = require('../../app');
const PORT = 3000;

const CartController = require('../controllers/CartController');

app.get('/api/cart', (req, res) => {
    // validate params (ミドルウェア的役割)
    if (!req.query.product_id || !req.query.amount) {
        return res.sendStatus(404);
    }else{CartController.show(req, res)}
});
app.listen(PORT, () => console.log('Application started'));