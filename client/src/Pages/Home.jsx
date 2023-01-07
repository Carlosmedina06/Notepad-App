import React, { useState } from 'react'

import Form from '../Components/Form/Form'
import NoteCard from '../Components/NoteCard/NoteCard'
import { useNotesStore } from '../store/notesStore'

const Home = () => {
  const notes = useNotesStore((state) => state.notes)
  const { createNote, deleteNote } = useNotesStore()
  const [input, setInput] = useState({})
  const [note, setNote] = useState({})

  const handlerChange = (e) => {
    const { name, value } = e.target

    setInput({
      ...input,
      [name]: value,
    })

    let newNote = {
      id: Date.now(),
      ...input,
    }

    setNote({ ...note, ...newNote })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createNote(note)
    setInput({
      title: '',
      content: '',
    })
  }
  const handleDelete = (id) => {
    deleteNote(id)
  }

  return (
    <>
      <h1>Note App</h1>
      <Form handleSubmit={handleSubmit} handlerChange={handlerChange} input={input} />
      <NoteCard handleDelete={handleDelete} notes={notes} />
    </>
  )
}

export default Home
