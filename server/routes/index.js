const Router = require('express')
const router =  new Router()

const assemblingRouter = require('./assemblingRouter')
const authorRouter = require('./authorRouter')

const organizationRouter = require('./organizationRouter')
const projectRouter = require('./projectRouter')
const reportRouter = require('./reportRouter')
const roleRouter = require('./roleRouter')
const screenshotRouter = require('./screenshotRouter')
//const userRouter = require('./userRouter')
const userProjectRouter = require('./userProjectRouter')
const accountsRouter = require('./accountsRouter')

router.use('/accounts',accountsRouter)
    //router.use('/user',userRouter)
router.use('/assembling', assemblingRouter)
router.use('/organization',organizationRouter)
router.use('/project',projectRouter)
router.use('/author', authorRouter)
router.use('/report', reportRouter)
router.use('/role',roleRouter)
router.use('/userProject',userProjectRouter)
router.use('/screenshot',screenshotRouter)

module.exports = router

