import React from 'react'

import { Container } from './NoteCardStyle'

const NoteCard = ({ notes, handleDelete }) => {
  return (
    <Container>
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note.id)}>Delete note</button>
          </div>
        )
      })}
    </Container>
  )
}

export default NoteCard
