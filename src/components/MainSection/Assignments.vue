<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import AssignmentList from './AssignmentList.vue'

export type Task = {
  id: number
  title: string
  description: string
  complete: boolean
}

const assignments = ref<Task[]>([])
onMounted(async () => {
  const res = await fetch('http://localhost:3000/tasks')
  const data: any[]= await res.json()
  assignments.value = data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    complete: item.complete
  }))
})


const completedAssignments = computed(() => {
  return assignments.value.filter(a => a.complete)
})
const inProgressAssignments = computed(() => {
  return assignments.value.filter(a => !a.complete)
})

const newAssignment = ref('')
const newDescription = ref('')

async function addAssignment() {
  if (!newAssignment.value.trim()) return

  const newTask = {
    title: newAssignment.value,
    description: newDescription.value,
  }

  try {
    const response = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
    const createdTask = await response.json()
    assignments.value.push(createdTask)

    newAssignment.value = ''
    newDescription.value = ''

  } catch (error){
    console.error('error!', error)
  }

}

function deleteAssignment(id: number){
  assignments.value = assignments.value.filter(a => a.id != id)
}
</script>

<template>
  <div class="assignments-wrapper">
    <assignment-list :assignments="inProgressAssignments" title="In Progress" @delete="deleteAssignment" />

    <form @submit.prevent="addAssignment" class="add-form">
      <div class="forms">
        <input v-model="newAssignment" placeholder="New assignment..." />
        <input v-model="newDescription" placeholder="Task description..." />
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
    <assignment-list :assignments="completedAssignments" title="Completed" class="completed-list" />
</template>

<style scoped>
.assignments-wrapper {
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
  background-color: rgba(159, 208, 88, 1);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
}

.add-form {
  display: flex;
  gap: 0.5rem;
  width: 100%;
  background-color: rgba(92, 125, 60, 1);
  padding: 0.5rem;
  border-radius: 9px;
  box-sizing: border-box;
}

.forms {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
}

.add-form input {
  flex-grow: 1;
  padding: 0.5rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  color: gray;
}

.add-form button {
  background-color: rgba(237, 185, 224, 1);
  border: none;
  border-radius: 8px;
  color: rgba(92, 125, 60, 1);
  font-weight: bold;
  padding: 0 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex-shrink: 0;
  width: 20%;
}

.add-form button:hover {
  background-color: rgba(237, 185, 224, 0.8);
}
.completed-list {
  max-width: 500px;
  margin: 2rem auto;
  background-color: rgba(159, 208, 88, 1);
  border-radius: 12px;
  padding: 1rem;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .assignments-wrapper,
  .completed-list {
    max-width: 100%;
    padding: 0.5rem;
  }
}
</style>



