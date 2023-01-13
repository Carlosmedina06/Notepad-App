export const validateNote = (req, res, next) => {
  const { title, content } = req.body

  if (!title) {
    return res.status(400).send({ message: 'Title is required' })
  }
  if (!content) {
    return res.status(400).send({ message: 'Content is required' })
  }
  next()
}
