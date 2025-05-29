<template>
  <div v-show="assignments.length" class="assignments">
    <h2 class="title">[ {{ title }} ]...</h2>
    <ul class="assignment-list">
      <assignment
        v-for="assignment in assignments"
        :key="assignment.id"
        class="assignment-item"
        :assignment="assignment"
        @delete="$emit('delete', $event)"
      ></assignment>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Assignment from './Assignment.vue'

const props = defineProps<{
  assignments: { id: number; name: string; complete: boolean }[];
  title: string;
}>()
const emit = defineEmits<{
  (e: 'delete', id: number): void
}>()
</script>

<style scoped>
.assignments {
  padding: 0;
  margin: 0;
  width: 100%;
}

.title {
  background-color: rgba(237, 185, 224, 1);
  color: rgba(92, 125, 60, 1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.assignment-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
}

.assignment-item {
  background-color: rgba(92, 125, 60, 1);
  color: white;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease;
  border-radius: 5px;
}

.assignment-item:hover {
  background-color: rgba(92, 125, 60, 0.72);

}

</style>


