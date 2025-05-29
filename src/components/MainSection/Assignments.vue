<script setup lang="ts">
import { ref, computed } from 'vue'
import AssignmentList from './AssignmentList.vue'

const assignments = ref([
  { id: 1, name: 'Finish project', description: 'Main client task', complete: false },
  { id: 2, name: "Don't die", description: 'Remember to breathe', complete: false },
  { id: 3, name: 'Learn Vue', description: 'Study Composition API', complete: false }
])

const completedAssignments = computed(() => {
  return assignments.value.filter(a => a.complete)
})
const inProgressAssignments = computed(() => {
  return assignments.value.filter(a => !a.complete)
})

const newAssignment = ref('')
const newDescription = ref('')

function addAssignment() {
  if (!newAssignment.value.trim()) return

  assignments.value.push({
    id: assignments.value.length + 1,
    name: newAssignment.value,
    description: newDescription.value,
    complete: false,
  })
  newAssignment.value = ''
  newDescription.value = ''
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



