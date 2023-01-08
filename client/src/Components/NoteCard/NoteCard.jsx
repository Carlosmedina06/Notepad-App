import React from 'react'
import { RiArchiveLine, RiCheckboxLine } from 'react-icons/ri'

import { Button, ButtonContainer, CardNote, Container, Content } from './NoteCardStyle'

const NoteCard = ({ notes, handleDelete }) => {
  return (
    <Container>
      {notes.map((note) => {
        return (
          <CardNote key={note.id}>
            <Content>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </Content>
            <ButtonContainer>
              <Button onClick={() => handleDelete(note.id)}>
                <RiCheckboxLine />
              </Button>
              <Button>
                <RiArchiveLine />
              </Button>
            </ButtonContainer>
          </CardNote>
        )
      })}
    </Container>
  )
}

export default NoteCard
