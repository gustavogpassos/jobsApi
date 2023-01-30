const { Router } = require('express')
const router = Router()

const companiesRouter = require('./companies.routes')

router.use('/companies', companiesRouter)

module.exports = router
