import mongoose from 'mongoose'

const connectionString =
  'mongodb+srv://carlosmedina06:admin@carlosdb.9aqig43.mongodb.net/notes?retryWrites=true&w=majority'

const database = () => {
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('Database connection established  ')
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err))
}

export default database
