<script setup lang="ts">
import { platinumSponsors, goldSponsors } from '@/data.ts'
</script>
<template>
  <section class="table-container">
    <h3>Platinum Sponsors</h3>
    <div class="table-1">
      <div v-for="(sponsor, index) in platinumSponsors" :key="index" class="table-cell">{{ sponsor }}</div>
    </div>

    <h3>Gold Sponsors</h3>
    <div class="table-2">
      <div v-for="(sponsor, index) in goldSponsors" :key="index" class="table-cell">{{ sponsor }}</div>
    </div>
  </section>
</template>

<style scoped>
.table-container {
  width: min(90%, 900px);
  margin: 0 auto;
  padding: 42px 32px;
}

.table-cell {
  background-color: var(--table-cell-color);
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

:root:has(option[id="theme-system"]:checked) .table-cell:hover,
:root:has(option[id="theme-dark"]:checked) .table-cell:hover{
  background-color: rgb(126, 126, 126);
}

.table-cell a {
  text-decoration: none;
  color: var(--text-color);
  height: 100%;
  width: 100%;
}

.table-1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin: 1rem 0 2rem;

}

.table-2 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  margin: 1rem 0 2rem;
}

.table-cell:last-child {
  color: gray;
  font-size: 12px;
  font-weight: 400;
}

@media (max-width: 768px) {
  .table-1 {
    grid-template-columns: repeat(2, 1fr);
  }

  .table-2 {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 578px) {
  .table-1 {
    grid-template-columns: 1fr;
  }

  .table-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
