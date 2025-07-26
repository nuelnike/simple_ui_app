<template>
  <NuxtLayout name="noauth">
  <div class="card">
    <h2>Login</h2>
    <div v-if="error" class="error">{{ error }}</div>
    <form>
      <div class="input-group">
        <input type="text" v-model="form.username" required :disabled="isDisabled" />
        <label for="username">Username</label>
      </div>

      <div class="input-group password-group">
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="form.password"
          required
          :disabled="isDisabled"
        />
        <label for="password">Password</label>
        <div type="button" class="toggle-btn" @click="showPassword = !showPassword">
          {{ showPassword ? 'Hide' : 'Show' }}
        </div>
      </div>

      <button type="button" class="bttn" @click="handleLogin">Sign In</button>
    </form>

    <div class="card-footer">
      <p>
        Don't have an account?
        <nuxt-link to="./register">Register here</nuxt-link>
      </p>
    </div>
  </div>
  </NuxtLayout>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { store } from '@/store'

const form = reactive({
  username: '',
  password: ''
})

const error = ref('')
const res = ref(false)
const isDisabled = ref(false)
const showPassword = ref(false)

const handleLogin = async () => {
  isDisabled.value = true
  error.value = ''

  if (!form.username || !form.password) {
    store().showNotification({"typ": "error", "msg":'All fields are required'});
    isDisabled.value = false
    return
  }

  res.value = store().doLogin(form)

  if (!res.value) store().showNotification({"typ": "error", "msg":'Login operation failed'});

  else {
    store().showNotification({"typ": "success", "msg":'Login operation successful'});
    navigateTo({ path: '/' }); // else if its not
  }

  isDisabled.value = false
}
</script>
