const { Router } = require('express')
const router = Router()

const companiesRouter = require('./companies.routes')
const opportunitiesRouter = require('./opportunities.routes')

router.use('/companies', companiesRouter)
router.use('/opportunities', opportunitiesRouter)

module.exports = router
