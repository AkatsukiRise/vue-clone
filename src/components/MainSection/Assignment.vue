<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  assignment: { id: number; name: string; description: string; complete: boolean }
}>()

const emit = defineEmits<{
  (e: 'delete', id: number): void
}>()

const isEditing = ref(false)
const editedName = ref(props.assignment.name)
const editedDescription = ref(props.assignment.description)

function saveEdits(){
  props.assignment.name = editedName.value
  props.assignment.description = editedDescription.value
  isEditing.value = false
}
</script>

<template>
  <li class="assignment">
    <div class="text" v-if="!isEditing">
      <span :class="{ done: assignment.complete }">{{ assignment.name }}</span>
      <p v-if="assignment.description" class="description" :class="{ done: assignment.complete }">{{ assignment.description }}</p>
    </div>

    <div v-else class="text">
      <input v-model="editedName" >
      <input v-model="editedDescription" >
    </div>
    <input type="checkbox" v-model="assignment.complete" />
    <button v-if="!isEditing" @click="isEditing = true">✏️</button>
    <button v-else @click="saveEdits">✅</button>
    <button @click="$emit('delete', assignment.id)">❌</button>
  </li>
</template>

<style scoped>
.assignment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.text {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-weight: 700;
}

.text input {
  flex-grow: 1;
  padding: 0.5rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  color: gray;
  margin-bottom: 0.5rem;
}

.text input:last-child{
  margin-bottom: 0;
}

.description {
  font-size: 0.9rem;
  color: #eee;
  margin-top: 0.25rem;
  font-weight: 500;
}

input[type='checkbox'] {
  accent-color: rgba(237, 185, 224, 1);
  transform: scale(1.2);
  margin-left: 0.5rem;
}

.done {
  text-decoration: line-through;
  color: #dadada;
  opacity: 0.8;
}

button {
  background: transparent;
  border: none;
  height: 15px;
  cursor: pointer;
  padding: 0;
}

</style>

