import React, { useEffect, useState } from 'react'

import Form from '../../Components/Form/Form'
import NoteCard from '../../Components/NoteCard/NoteCard'
import { useNotesStore } from '../../store/notesStore'

import { Container } from './HomeStyle'

const Home = () => {
  const notes = useNotesStore((state) => state.notes)
  const { createNote, deleteNote, fetchNotes } = useNotesStore()
  const [input, setInput] = useState({
    title: '',
    content: '',
  })

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  const handleChange = (e) => {
    setInput({
      ...input,
      id: Date.now(),
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.title === '' || input.content === '') return
    if (notes.find((notes) => notes.title === input.title)) return
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
    <Container>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} input={input} />
      <NoteCard handleDelete={handleDelete} notes={notes} />
    </Container>
  )
}

export default Home
