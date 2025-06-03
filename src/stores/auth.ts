import { defineStore} from 'pinia'
import { ref } from 'vue'


export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true')

  function login() {
    isLoggedIn.value = true
    localStorage.setItem('isLoggedIn', 'true')
  }

  function logout() {
    isLoggedIn.value = false
    localStorage.removeItem('isLoggedIn')
  }

  return { isLoggedIn, login, logout }
})
