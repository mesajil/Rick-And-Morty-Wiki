const controller = require('../controllers/user.controller')
const router = require('express').Router();


router.post('/', controller.postUser)
router.get('/', controller.getUsers)



module.exports = router;