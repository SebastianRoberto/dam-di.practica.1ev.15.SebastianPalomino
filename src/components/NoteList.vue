<template>
  <div class="note-list">
    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      :isSelected="selectedNotes.includes(note.id)"
      @select="toggleSelection"
      @clone="cloneNote"
      @delete="deleteNote"
      @update="updateNote"
    />
  </div>
</template>

<script>
import Note from './Note.vue';

export default {
  name: 'NoteList',
  props: {
    notes: Array,
    selectedNotes: Array,
  },
  emits: ['select', 'clone', 'delete', 'update'],
  components: {
    Note,
  },
  methods: {
    toggleSelection(id) {
      this.$emit('select', id);
    },
    cloneNote(id) {
      this.$emit('clone', id);
    },
    deleteNote(id) {
      this.$emit('delete', id);
    },
    updateNote(updatedNote) {
      this.$emit('update', updatedNote);
    },
  },
};
</script>

<style>
.note-list {
  display: flex;
  flex-direction: column;
}
</style>
