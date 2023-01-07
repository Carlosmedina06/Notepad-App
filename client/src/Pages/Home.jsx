import React, { useState } from 'react'

import { useNotesStore } from '../store/notesStore'

const Home = () => {
  const notes = useNotesStore((state) => state.notes)
  const { createNote, deleteNote } = useNotesStore()
  const [note, setNote] = useState({})

  const handlerChange = (e) => {
    let newNote = {
      id: Date.now(),
      [e.target.name]: e.target.value,
    }

    setNote({ ...note, ...newNote })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createNote(note)
  }

  const handleDelete = (id) => {
    deleteNote(id)
  }

  return (
    <>
      <h1>Note App</h1>
      <form onSubmit={handleSubmit}>
        <h2>Notes</h2>
        <label htmlFor="title">Title</label>
        <br />
        <input id="title" name="title" type="text" onChange={handlerChange} />
        <br />
        <br />
        <label htmlFor="content">Content</label>
        <br />
        <input id="content" name="content" type="text" onChange={handlerChange} />
        <br />
        <br />
        <button type="submit">Add Note</button>
      </form>
      <br />

      {!notes ? (
        <p>Notes not found</p>
      ) : (
        notes.map((note) => {
          return (
            <div key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
              <button onClick={() => handleDelete(note.id)}>Delete Note</button>
            </div>
          )
        })
      )}
    </>
  )
}

export default Home
