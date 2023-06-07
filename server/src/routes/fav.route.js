const controller = require('../controllers/fav.controller')
const router = require('express').Router();


router.post('/', controller.addFavorite)


module.exports = router;