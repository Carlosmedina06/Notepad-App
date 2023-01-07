import create from 'zustand'

export const useNotesStore = create(() => ({
  notes: {
    title: '',
    content: '',
  },
}))
