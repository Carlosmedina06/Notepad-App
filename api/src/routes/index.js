import { Router } from 'express'

import notesRouter from './notes.routes.js'
import userRouter from './user.routes.js'

const routes = Router()

routes.use('/user', userRouter)
routes.use('/notes', notesRouter)

export default routes
