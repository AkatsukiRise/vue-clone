<script setup>
import { ref } from 'vue'

const emit = defineEmits(['register-success'])

const username = ref('')
const password = ref('')
const message = ref('')
const isRegistered = ref(false)

async function onRegister(){
  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })
  const responseText = await response.text()
  if (response.ok) {
    message.value = 'you successfully registered!'
    username.value = ''
    password.value = ''
    isRegistered.value = true
    emit('register-success')
  } else {
    message.value = responseText
  }
}
</script>

<template>
  <div class="form">
    <h1>Register</h1>
    <form v-if="!isRegistered" @submit.prevent="onRegister">
      <div>
        <label for="username">Username:</label>
        <input id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form {
  min-width: 30%;
  margin: 1.5rem auto;
  padding: 1.5rem;
  background-color: var(--secondary-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

form div {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.3rem;
}

input {
  width: 100%;
  padding: 0.4rem 0.6rem;
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--bg);
  color: var(--text-color);
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: var(--highlight-color);
  background-color: var(--secondary-bg-color);
}

button {
  width: 100%;
  padding: 0.6rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--button-text-color);
  background: var(--button-linear);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;
}

button:hover {
  background-color: var(--button-hover-main);
  border-color: var(--highlight-color);
  color: var(--highlight-color);
}

</style>
