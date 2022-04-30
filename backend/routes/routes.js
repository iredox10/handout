import express from 'express'
const route = express.Router()

import * as controller from '../controllers/controllers.js'

route.get('/', controller.get_home)



export default route