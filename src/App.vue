<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()

const authStore = useAuthStore()

function onLoginSuccess() {
  authStore.login()
  router.push('/')
}

function onRegisterSuccess(){
  authStore.login()
  router.push('/')
}

function onLogout() {
  authStore.logout()
  window.location.reload()
}
</script>

<template>
  <div class="page">
    <Header :is-logged-in="authStore.isLoggedIn" @logout="onLogout" />
    <main class="content">
      <router-view @login-success="onLoginSuccess" @register-success="onRegisterSuccess" />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
