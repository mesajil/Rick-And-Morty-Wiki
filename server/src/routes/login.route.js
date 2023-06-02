const controller = require('../controllers/login.controller')
const router = require('express').Router();


router.get('/', controller.login)



module.exports = router;