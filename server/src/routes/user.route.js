const controller = require('../controllers/user.controller')
const router = require('express').Router();


router.post('/', controller.postUser)
router.get('/', controller.getUsers)
router.get('/:id', controller.getUserById)
router.delete('/:id', controller.deleteUser)



module.exports = router;