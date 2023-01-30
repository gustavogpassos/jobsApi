const { Router } = require('express')
const controller = require('./../controllers/companies')
const companiesRouter = Router()

companiesRouter.get('/', controller.findAll)
companiesRouter.get('/:_id', controller.findById)
companiesRouter.post('/search', controller.search)
companiesRouter.post('/create', controller.create)

module.exports = companiesRouter
