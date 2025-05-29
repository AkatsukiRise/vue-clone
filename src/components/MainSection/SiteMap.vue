<script setup lang="ts">
import { siteMapCategories } from '@/data.js'
import { useI18n } from 'vue-i18n'


const { t } = useI18n()
</script>

<template>
  <nav class="map">
    <div class="map-links">
      <div
        v-for="category in siteMapCategories"
        :key="category.id"
        class="category"
      >
        <h4>{{ t(category.id) }}</h4>
        <ul>
          <li
            v-for="link in category.links"
            :key="link.key"
          >
            <a href="#">{{ t(link.key) }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.map {
  width: 100%;
  background: var(--secondary-bg-color);
}

.map-links {
  width: min(100%, 900px);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  padding: 24px 32px;
  height: 500px;
}

.category {
  min-width: 250px;
}

.category h4 {
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 10px 0;
}

.category ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.category a {
  text-decoration: none;
  color: #8f8f8f;
  font-weight: 400;
  font-size: 14px;
}

@media (max-width: 768px) {
  .map-links {
    height: 100%;
    flex-direction: row;
  }
}
</style>

