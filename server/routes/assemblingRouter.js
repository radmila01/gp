const Router = require('express')
const router = new Router()

const AssemblingController = require("../controllers/AssemblingController");

router.post('/', AssemblingController.create)
router.get('/:id',AssemblingController.getAssemblingById)

module.exports = router