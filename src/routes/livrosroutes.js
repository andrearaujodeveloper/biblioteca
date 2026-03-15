const express = require('express');
const livroscontroller = require('../controllers/livroscontroller.js')
const router = express.Router();
livros = [];
router.get('/' , livroscontroller.findAll);
router.post('/', livroscontroller.create);
router.put('/', livroscontroller.edit);
router.delete('/', livroscontroller.delete)
module.exports = router;





