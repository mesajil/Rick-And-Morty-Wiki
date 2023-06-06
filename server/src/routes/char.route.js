const controller = require('../controllers/char.controller')
const router = require('express').Router();


router.post('/', controller.postChar)
router.get('/:id', controller.getCharById)
router.get('/', controller.getAllChar)
router.put('/:id', controller.updateChar)
router.delete('/:id', controller.deleteChar)



module.exports = router;