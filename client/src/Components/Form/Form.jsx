import React from 'react'

import { Button, Container, Content, Input, TextArea } from './FormStyle'

const Form = ({ handleChange, handleSubmit, input }) => {
  return (
    <Container>
      <Content onSubmit={handleSubmit}>
        <h2>Create your note</h2>
        <label htmlFor="title">Title</label>
        <Input
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Your title here"
          type="text"
          value={input.title}
          onChange={handleChange}
        />
        <label htmlFor="content">Content</label>
        <TextArea
          cols="30"
          id="content"
          name="content"
          placeholder="Your content here"
          rows="10"
          value={input.content}
          onChange={handleChange}
        />

        <Button type="submit">Add Note</Button>
      </Content>
    </Container>
  )
}

export default Form
