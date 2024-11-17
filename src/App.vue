<template>
  <div id="app">
    <Header />
    <Toolbar
      :notes="notes"
      :selectedNotes="selectedNotes"
      @select-all="selectAll"
      @invert-selection="invertSelection"
      @clear-selection="clearSelection"
      @delete-selected="deleteSelected"
      @clone-selected="cloneSelected"
      @clear-all="clearAll"
      @create-note="createNote"
    />
    <NoteList
      :notes="notes"
      :selectedNotes="selectedNotes"
      @delete="deleteById"
      @select="toggleSelection"
      @clone="cloneById"
      @update="updateNote"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Toolbar from './components/Toolbar.vue';
import NoteList from './components/NoteList.vue';
import useNotes from './composables/useNotes';

export default {
  name: 'App',
  components: {
    Header,
    Toolbar,
    NoteList,
  },
  setup() {
    const {
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
    } = useNotes();

    loadNotes();

    return {
      notes,
      selectedNotes,
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
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  max-width: 800px;
}
</style>
