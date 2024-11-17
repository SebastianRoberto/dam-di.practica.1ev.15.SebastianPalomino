<template>
    <div class="note" :class="{ selected: isSelected }">
      <div v-if="!isEditing">
        <h3>{{ note.title }}</h3>
        <p>{{ note.description }}</p>
        <div class="actions">
          <button @click="$emit('select', note.id)">
            {{ isSelected ? 'Deseleccionar' : 'Seleccionar' }}
          </button>
          <button @click="$emit('clone', note.id)">Clonar</button>
          <button @click="$emit('delete', note.id)">Eliminar</button>
          <button @click="toggleEditMode">Editar</button>
        </div>
      </div>
      <div v-else>
        <input type="text" v-model="editedTitle" placeholder="Título" />
        <textarea v-model="editedDescription" placeholder="Descripción"></textarea>
        <div class="actions">
          <button @click="saveChanges">Guardar</button>
          <button @click="cancelEdit">Cancelar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable vue/multi-word-component-names */
  export default {
    name: 'Note',
    props: {
      note: Object,
      isSelected: Boolean,
    },
    emits: ['select', 'clone', 'delete', 'update'],
    data() {
      return {
        isEditing: false,
        editedTitle: this.note.title,
        editedDescription: this.note.description,
      };
    },
    methods: {
      toggleEditMode() {
        this.isEditing = true;
      },
      saveChanges() {
        this.$emit('update', {
          id: this.note.id,
          title: this.editedTitle,
          description: this.editedDescription,
        });
        this.isEditing = false;
      },
      cancelEdit() {
        this.isEditing = false;
        this.editedTitle = this.note.title;
        this.editedDescription = this.note.description;
      },
    },
  };
  </script>
  
  <style>
  .note {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }
  .note.selected {
    background-color: #f0f8ff;
  }
  .actions button {
    margin-right: 5px;
  }
  </style>
  