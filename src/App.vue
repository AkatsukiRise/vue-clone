<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoggedIn = ref(false)

onMounted(() => {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true'
})

function onLoginSuccess() {
  isLoggedIn.value = true
  router.push('/')
  localStorage.setItem('isLoggedIn', 'true')
}

function onRegisterSuccess(){
  isLoggedIn.value = true
  router.push('/')
  localStorage.setItem('isLoggedIn', 'true')
}

function onLogout() {
  isLoggedIn.value = false
  localStorage.removeItem('isLoggedIn')
  window.location.reload()
}
</script>

<template>
  <div class="page">
    <Header :is-logged-in="isLoggedIn" @logout="onLogout" />
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
