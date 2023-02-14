const { Router } = require('express')

const opportunitiesRouter = Router()

const controller = require('./../controllers/opportunities')

opportunitiesRouter.get('/', controller.getAll)
opportunitiesRouter.get('/:id', controller.getById)
opportunitiesRouter.post('/create', controller.create)
opportunitiesRouter.patch('/:id', controller.update)
opportunitiesRouter.get('/company/:id', controller.getByCompanyId)

module.exports = opportunitiesRouter
