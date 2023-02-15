const { Router } = require('express')

const opportunitiesRouter = Router()

const controller = require('./../controllers/opportunities')

opportunitiesRouter.post('/create', controller.create)
opportunitiesRouter.patch('/:id', controller.update)
opportunitiesRouter.post('/search', controller.search)
opportunitiesRouter.get('/', controller.getAll)
opportunitiesRouter.get('/:id', controller.getById)
opportunitiesRouter.get('/company/:id', controller.getByCompany)

module.exports = opportunitiesRouter
