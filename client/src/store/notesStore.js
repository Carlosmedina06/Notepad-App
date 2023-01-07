import create from 'zustand'

export const useNotesStore = create((set) => ({
  notes: [],
  createNote: (note) => set((state) => ({ ...state, notes: [...state.notes, note] })),
  deleteNote: (id) =>
    set((state) => ({ ...state, notes: [...state.notes.filter((note) => note.id !== id)] })),
}))
