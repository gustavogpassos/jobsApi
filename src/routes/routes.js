const { Router } = require('express')
const router = Router()

const companiesRouter = require('./companies.routes')
const opportunitiesRouter = require('./opportunities.routes')
const profilesRouter = require('./profiles.routes')

router.use('/companies', companiesRouter)
router.use('/opportunities', opportunitiesRouter)
router.use('/profiles', profilesRouter)

module.exports = router
