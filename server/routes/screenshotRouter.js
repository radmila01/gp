const Router = require('express')
const router = new Router()
const screenController = require("../controllers/screenshotController");
const projectController = require("../controllers/projectController");

router.post('/create', screenController.create)
router.get('/getAll',screenController.getAll)


module.exports = router