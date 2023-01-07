import React from 'react'

const Form = ({ input, handleSubmit, handlerChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create your note</h2>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" value={input.title} onChange={handlerChange} />
        <label htmlFor="content">Content</label>
        <input
          id="content"
          name="content"
          type="text"
          value={input.content}
          onChange={handlerChange}
        />
        <button type="submit">Add Note</button>
      </form>
    </>
  )
}

export default Form
