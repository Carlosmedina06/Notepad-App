import React from 'react'
import { useState } from 'react'

const Home = () => {
  const [allNotes, setAllNotes] = useState([])
  const [note, setNote] = useState({})

  const handlerChange = (event) => {
    const newNote = { ...note, id: 1, [event.target.name]: event.target.value }

    setNote({ ...note, ...newNote })
  }

  const handlerSubmit = (event) => {
    event.preventDefault()
    setAllNotes(allNotes.concat(note))
  }

  const handlerDelete = () => {
    setAllNotes(
      allNotes.filter((note) => {
        note.title !== note.title
      }),
    )
  }

  return (
    <>
      <h1>Note App</h1>
      <form onSubmit={handlerSubmit}>
        <h2>Notes</h2>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" onChange={handlerChange} />
        <label htmlFor="content">Content</label>
        <input id="content" name="content" type="text" onChange={handlerChange} />
        <button>Add Note</button>
      </form>

      {!allNotes.length ? (
        <h1>Notes not found</h1>
      ) : (
        allNotes.map((note, index) => (
          <div key={index}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={handlerDelete}>Delete</button>
          </div>
        ))
      )}
    </>
  )
}

export default Home
