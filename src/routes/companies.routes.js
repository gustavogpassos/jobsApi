const { Router } = require('express')
const controller = require('./../controllers/companies')
const companiesRouter = Router()

companiesRouter.get('/', controller.getAll)
companiesRouter.get('/:id', controller.getById)
companiesRouter.post('/search', controller.search)
companiesRouter.post('/create', controller.create)
companiesRouter.patch('/update/:id', controller.update)

module.exports = companiesRouter
