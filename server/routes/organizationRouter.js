const Router = require('express')
const router = new Router()
const organizationController = require('../controllers/organizationController')

router.post('/', organizationController.create)
router.post('/users/add-to-company', organizationController.addToCompany);
router.get('/users/get-all-users/:organizationId', organizationController.getUsersInCompany);
module.exports = router