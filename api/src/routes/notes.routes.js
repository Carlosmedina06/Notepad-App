import { Router } from 'express'

import {
  createNote,
  deleteNote,
  getNotes,
  getNotesById,
  updateNote,
} from '../controllers/notes.controllers.js'
import { errorHandler } from '../middlewares/errorHandler.js'
import { validateNote } from '../middlewares/validation.js'

const notesRouter = Router()

notesRouter.get('/', getNotes)

notesRouter.get('/:id', getNotesById)

notesRouter.post('/', validateNote, createNote)

notesRouter.put('/:id', updateNote)

notesRouter.delete('/:id', deleteNote)

notesRouter.use(errorHandler)

export default notesRouter
