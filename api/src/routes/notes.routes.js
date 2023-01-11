import { Router } from 'express'

// import Note from '../models/Notes.js'

const notesRouter = Router()

notesRouter.get('/', (req, res) => {
  // const note = new Note({
  //   title: 'ruta',
  //   content: 'user',
  // })

  // note.save()
  res.status(200).send('ruta notes')
})

export default notesRouter
