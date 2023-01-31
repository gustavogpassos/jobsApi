const { Router } = require('express')

const opportunitiesRouter = Router()

const controller = require('./../controllers/opportunities')

opportunitiesRouter.get('/', controller.findAll)
opportunitiesRouter.get('/:id', controller.findById)
opportunitiesRouter.post('/create', controller.create)
opportunitiesRouter.patch('/:id', controller.update)

module.exports = opportunitiesRouter
