const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');

// Get /api/products
router.get('/',productsCtrl.index);
// Get /api/products/:id
router.get('/:id',productsCtrl.show);

module.exports = router;