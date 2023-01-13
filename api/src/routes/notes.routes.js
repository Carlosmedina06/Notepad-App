import { Router } from 'express'

import Note from '../models/Notes.js'

const notesRouter = Router()

notesRouter.get('/', async (req, res) => {
  const notes = await Note.find({})

  notes.length ? res.status(200).json(notes) : res.status(404).send({ message: 'No notes found' })
})

notesRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params

    const note = await Note.findById(id)

    note ? res.status(200).json(note) : res.status(404).send({ message: 'Note not found' })
  } catch (error) {
    next(error)
  }
})

notesRouter.post('/', async (req, res) => {
  const { title, content } = req.body

  const newNote = new Note({
    title,
    content,
  })

  const noteSaved = await newNote.save()

  res.status(201).json(noteSaved)
})

notesRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const noteDeleted = await Note.findByIdAndDelete(id)

    noteDeleted
      ? res.status(204).send({ message: 'Note Deleted' })
      : res.status(404).send({ message: 'Note not found' })
  } catch (error) {
    next(error)
  }
})

notesRouter.use((error, req, res, _next) => {
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return res.status(400).send({ message: 'Malformatted id' }).end()
  }
})

export default notesRouter
