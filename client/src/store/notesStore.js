import create from 'zustand'
import { persist } from 'zustand/middleware'
import axios from 'axios'
const url = 'http://localhost:3001/notes'

export const useNotesStore = create(
  persist(
    (set) => ({
      notes: [],
      fetchNotes: () => {
        fetch(url)
          .then((res) => res.json())
          .then((notes) =>
            set({
              notes: notes,
            }),
          )
      },
      postNote: (note) => {
        axios.post(url, note).then((res) => {
          set((state) => ({ ...state, notes: [...state.notes, res.data] }))
        })
      },
      updateNote: (note, complete) => {
        axios.put(`${url}/${note.id}`, { ...note, completed: complete }).then((res) => {
          set((state) => ({
            ...state,
            notes: [...state.notes.filter((note) => note.id !== res.data.id), res.data],
          }))
        })
      },
      deleteNote: (id) => {
        axios.delete(`${url}/${id}`).then((_res) => {
          set((state) => ({ ...state, notes: [...state.notes.filter((note) => note.id !== id)] }))
        })
      },
    }),
    {
      name: 'notes',
      getStorage: () => localStorage,
    },
  ),
)
