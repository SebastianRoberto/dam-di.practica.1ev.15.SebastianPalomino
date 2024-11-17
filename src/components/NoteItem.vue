<template>
    <div class="note-item" :class="{ selected: isSelected }">
      <h3>{{ note.title }}</h3>
      <p>{{ note.description }}</p>
      <button @click="$emit('select')">Seleccionar</button>
      <button @click="$emit('clone')">Clonar</button>
      <button @click="$emit('delete')">Eliminar</button>
    </div>
  </template>
  
  <script>
  /* eslint-disable vue/multi-word-component-names */
  export default {
    name: 'NoteItem',
    props: {
      note: Object,
      isSelected: Boolean,
    },
  };
  </script>

  
  <style>
  .note-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .note-item.selected {
    background-color: #f0f8ff;
    border-color: #5b9bd5;
  }
  button {
    margin-right: 5px;
  }
  </style>
  