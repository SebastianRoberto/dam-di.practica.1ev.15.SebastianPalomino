<template>
    <div class="toolbar">
      <button @click="selectAll" :disabled="!notes.length">Seleccionar Todas</button>
      <button @click="invertSelection" :disabled="!notes.length">Invertir Selección</button>
      <button @click="clearSelection" :disabled="!selectedNotes.length">Anular Selección</button>
      <button @click="deleteSelected" :disabled="!selectedNotes.length">Eliminar Seleccionadas</button>
      <button @click="cloneSelected" :disabled="!selectedNotes.length">Clonar Seleccionadas</button>
      <button @click="clearAll" :disabled="!notes.length">Limpiar Todo</button>
      <button @click="createNote">Crear Nueva Nota</button>
    </div>
  </template>
  
  <script>
  /* eslint-disable vue/multi-word-component-names */
  export default {
    name: 'Toolbar',
    props: {
      notes: Array,
      selectedNotes: Array,
    },
    emits: [
      'select-all',
      'invert-selection',
      'clear-selection',
      'delete-selected',
      'clone-selected',
      'clear-all',
      'create-note',
    ],
    methods: {
      selectAll() {
        this.$emit('select-all');
      },
      invertSelection() {
        this.$emit('invert-selection');
      },
      clearSelection() {
        this.$emit('clear-selection');
      },
      deleteSelected() {
        this.$emit('delete-selected');
      },
      cloneSelected() {
        this.$emit('clone-selected');
      },
      clearAll() {
        this.$emit('clear-all');
      },
      createNote() {
        this.$emit('create-note');
      },
    },
  };
  </script>
  
  <style>
  .toolbar {
    padding: 10px;
    background-color: #e7e7e7;
    border-bottom: 1px solid #ddd;
  }
  button {
    margin-right: 10px;
  }
  </style>
  