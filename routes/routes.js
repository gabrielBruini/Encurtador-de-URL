var express = require("express")
var app = express();
var router = express.Router();
var UrlController = require('../controller/UrlController')


router.get('/', UrlController.index)
router.get('/:codigo', UrlController.redirecionar)
router.post('/criar', UrlController.criar)

module.exports = router