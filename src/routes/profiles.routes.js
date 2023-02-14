const { Router } = require('express')
const controller = require('../controllers/profiles')

const profilesRouter = Router()

profilesRouter.get('/', controller.getAll)
profilesRouter.post('/create', controller.create)

module.exports = profilesRouter
