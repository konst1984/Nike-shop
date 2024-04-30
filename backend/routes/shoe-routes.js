const express = require('express');
const {getShoes, getShoe} = require('../controllers/shoe-controler');

const router = express.Router();

router.get('/:slug', getShoes)
router.get('/jordan/:id', getShoe)

module.exports = router;