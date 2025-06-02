<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  assignment: { id: number; title: string; description: string; complete: boolean }
}>()

const emit = defineEmits<{
  (e: 'delete', id: number): void
}>()

const isEditing = ref(false)
const editedName = ref(props.assignment.title)
const editedDescription = ref(props.assignment.description)

async function saveEdits(){
  const updatedTask = {
    title: editedName.value,
    description: editedDescription.value,
    complete: props.assignment.complete,
  }

  try {
    const response = await fetch(`http://localhost:3000/tasks/${props.assignment.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask),
    })
    props.assignment.title = editedName.value
    props.assignment.description = editedDescription.value

    isEditing.value = false
  }
  catch (error) {
    console.error('error', error)
  }
}

async function partialUpdateTask(field: {complete: boolean}){
  try {
    const response = await fetch(`http://localhost:3000/tasks/${props.assignment.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(field),
    })

    props.assignment.complete = field.complete
  } catch (error) {
    console.error('erroreeee!', error)
  }
}

function onPartChange(){
  partialUpdateTask({ complete: props.assignment.complete })
}

async function deleteTask() {
  try {
    await fetch(`http://localhost:3000/tasks/${props.assignment.id}`, {
      method: 'DELETE',
    })
    emit('delete', props.assignment.id)
  } catch (error) {
    console.error('error!!', error)
  }
}

</script>

<template>
  <li class="assignment">
    <div class="text" v-if="!isEditing">
      <span :class="{ done: assignment.complete }">{{ assignment.title }}</span>
      <p v-if="assignment.description" class="description" :class="{ done: assignment.complete }">{{ assignment.description }}</p>
    </div>

    <div v-else class="text">
      <input v-model="editedName" >
      <input v-model="editedDescription" >
    </div>
    <input type="checkbox" v-model="assignment.complete" @change="onPartChange" />
    <button v-if="!isEditing" @click="isEditing = true">✏️</button>
    <button v-else @click="saveEdits">✅</button>
    <button @click="deleteTask">❌</button>
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

