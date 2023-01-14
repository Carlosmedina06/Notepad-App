import React from 'react'
import { RiInboxArchiveLine, RiCloseFill, RiCheckFill } from 'react-icons/ri'

import { Button, ButtonContainer, CardNote, Container, Content, NotNote } from './NoteCardStyle'

const NoteCard = ({ notes, handleDelete, handleCompleted }) => {
  return (
    <Container>
      {notes.length === 0 ? (
        <NotNote>Please create a new note</NotNote>
      ) : (
        notes.map((note) => {
          return (
            <CardNote key={note.id}>
              <Content>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
              </Content>
              <ButtonContainer>
                <Button title="completed note" onClick={() => handleCompleted(note.id)}>
                  <RiCheckFill />
                </Button>
                <Button title="delete note" onClick={() => handleDelete(note.id)}>
                  <RiCloseFill />
                </Button>
                <Button title="archive note">
                  <RiInboxArchiveLine />
                </Button>
              </ButtonContainer>
            </CardNote>
          )
        })
      )}
    </Container>
  )
}

export default NoteCard
