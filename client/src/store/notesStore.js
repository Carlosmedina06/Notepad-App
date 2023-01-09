import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useNotesStore = create(
  persist(
    (set) => ({
      notes: [],
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
