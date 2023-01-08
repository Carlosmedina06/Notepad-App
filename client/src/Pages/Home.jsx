import React, { useState } from 'react'

import Form from '../Components/Form/Form'
import NoteCard from '../Components/NoteCard/NoteCard'
import { useNotesStore } from '../store/notesStore'

const Home = () => {
  const notes = useNotesStore((state) => state.notes)
  const { createNote, deleteNote } = useNotesStore()
  const [input, setInput] = useState({
    title: '',
    content: '',
  })

  const handleChange = (e) => {
    setInput({
      ...input,
      id: Date.now(),
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createNote({ ...notes, ...input })
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
      <Form handleChange={handleChange} handleSubmit={handleSubmit} input={input} />
      <NoteCard handleDelete={handleDelete} notes={notes} />
    </>
  )
}

export default Home
