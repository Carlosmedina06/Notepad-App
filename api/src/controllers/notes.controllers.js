import Note from '../models/Notes.js'

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({})

    notes ? res.status(200).json(notes) : res.status(404).send([{ message: 'No notes founddasda' }])
  } catch (error) {
    res.status(500).send({ message: 'notes not found' })
  }
}

export const getNotesById = async (req, res, next) => {
  try {
    const { id } = req.params

    const note = await Note.findById(id)

    note ? res.status(200).json(note) : res.status(404).send({ message: 'Note not found' })
  } catch (error) {
    next(error)
  }
}

export const createNote = async (req, res) => {
  const { title, content } = req.body

  const newNote = new Note({
    title,
    content,
    completed: false,
  })

  const noteSaved = await newNote.save()

  res.status(201).json(noteSaved)
}

export const deleteNote = async (req, res, next) => {
  try {
    const { id } = req.params
    const noteDeleted = await Note.findByIdAndDelete(id)

    noteDeleted
      ? res.status(204).send({ message: 'Note Deleted' })
      : res.status(404).send({ message: 'Note not found' })
  } catch (error) {
    next(error)
  }
}

export const updateNote = async (req, res, next) => {
  try {
    const { id } = req.params
    const { completed } = req.body

    const noteUpdated = await Note.findByIdAndUpdate(id, { completed }, { new: true })

    res.status(200).json(noteUpdated)
  } catch (error) {
    next(error)
  }
}
