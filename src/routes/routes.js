const {Router} = require('express');
const router = Router();
const livrosroutes = require('./livrosroutes.js');


router.use('/livros', livrosroutes);

module.exports = router;