import { ref } from 'vue';

export default function useNotes() {
  const notes = ref([]);
  const selectedNotes = ref([]);

  const loadNotes = async () => {
    const response = await fetch('/src/assets/notes.json');
    notes.value = await response.json();
  };

  const selectAll = () => {
    selectedNotes.value = notes.value.map((note) => note.id);
  };

  const invertSelection = () => {
    const currentSelection = new Set(selectedNotes.value);
    selectedNotes.value = notes.value
      .filter((note) => !currentSelection.has(note.id))
      .map((note) => note.id);
  };

  const clearSelection = () => {
    selectedNotes.value = [];
  };

  const deleteById = (id) => {
    notes.value = notes.value.filter((note) => note.id !== id);
    selectedNotes.value = selectedNotes.value.filter((selectedId) => selectedId !== id);
  };

  const deleteSelected = () => {
    selectedNotes.value.forEach((id) => deleteById(id));
    selectedNotes.value = [];
  };

  const cloneById = (id) => {
    const original = notes.value.find((note) => note.id === id);
    if (!original) return;

    const maxId = Math.max(...notes.value.map((note) => note.id), 0);
    const clone = { ...original, id: maxId + 1 };
    notes.value.push(clone);
  };

  const cloneSelected = () => {
    selectedNotes.value.forEach((id) => cloneById(id));
  };

  const clearAll = () => {
    notes.value = [];
    selectedNotes.value = [];
  };

  const createNote = () => {
    const maxId = Math.max(...notes.value.map((note) => note.id), 0);
    notes.value.push({
      id: maxId + 1,
      title: `Nueva Nota ${maxId + 1}`,
      description: 'Descripción de la nueva nota.',
    });
  };

  const toggleSelection = (id) => {
    if (selectedNotes.value.includes(id)) {
      selectedNotes.value = selectedNotes.value.filter((noteId) => noteId !== id);
    } else {
      selectedNotes.value.push(id);
    }
  };

  const updateNote = (updatedNote) => {
    const index = notes.value.findIndex((note) => note.id === updatedNote.id);
    if (index !== -1) {
      notes.value[index] = { ...notes.value[index], ...updatedNote };
    }
  };

  return {
    notes,
    selectedNotes,
    loadNotes,
    selectAll,
    invertSelection,
    clearSelection,
    deleteById,
    deleteSelected,
    cloneById,
    cloneSelected,
    clearAll,
    createNote,
    toggleSelection,
    updateNote,
  };
}
