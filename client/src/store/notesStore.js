import create from 'zustand'
import { persist } from 'zustand/middleware'
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
      createNote: (note) => set((state) => ({ ...state, notes: [...state.notes, note] })),
      deleteNote: (id) =>
        set((state) => ({ ...state, notes: [...state.notes.filter((note) => note.id !== id)] })),
    }),
    {
      name: 'notes',
      getStorage: () => localStorage,
    },
  ),
)
