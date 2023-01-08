import React from 'react'

import { Container } from './FormStyle'

const Form = ({ handleChange, handleSubmit, input }) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2>Create your note</h2>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" value={input.title} onChange={handleChange} />
        <label htmlFor="content">Content</label>
        <input
          id="content"
          name="content"
          type="text"
          value={input.content}
          onChange={handleChange}
        />
        <button type="submit">Add Note</button>
      </form>
    </Container>
  )
}

export default Form
