import React from 'react'
import { useState } from 'react'

const Home = () => {
  const [allNotes, setAllNotes] = useState([])
  const [note, setNote] = useState({})

  const handlerChange = (e) => {
    const newNote = {
      id: Date.now(),
      [e.target.name]: e.target.value,
    }

    setNote({ ...note, ...newNote })
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    setAllNotes([...allNotes, note])
  }

  const handleDelete = (id) => {
    setAllNotes(allNotes.filter((note) => note.id !== id))
  }

  return (
    <>
      <h1>Note App</h1>
      <form onSubmit={handlerSubmit}>
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
        <button>Add Note</button>
      </form>
      <br />
      {!allNotes.length ? (
        <h1>Notes not found</h1>
      ) : (
        allNotes.map((note) => (
          <div key={note.id}>
            <p>{note.id}</p>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        ))
      )}
    </>
  )
}

export default Home
