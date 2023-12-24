const Router = require('express')
const router = new Router()
const reportController = require("../controllers/reportController");

//router.post('/create-report',reportController.create)

router.get('/',)
router.post('/', reportController.addReport)

module.exports = router