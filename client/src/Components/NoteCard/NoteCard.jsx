import React from 'react'

const NoteCard = ({ notes, handleDelete }) => {
  return (
    <>
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note.id)}>Delete note</button>
          </div>
        )
      })}
    </>
  )
}

export default NoteCard
