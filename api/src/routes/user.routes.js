import { Router } from 'express'

const userRouter = Router()

userRouter.get('/', (req, res) => {
  res.status(200).send('ruta user')
})

export default userRouter
