const controller = require('../controllers/user.controller')
const router = require('express').Router();


router.post('/', controller.postUser)



module.exports = router;