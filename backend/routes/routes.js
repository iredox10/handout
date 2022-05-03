import express from 'express'
const route = express.Router()

import * as controller from '../controllers/controllers.js'

route.get('/', controller.get_home)

route.post('/add-handout', controller.add_handout)

route.delete('/delete-handout/:id', controller.delete_handout)

export default route