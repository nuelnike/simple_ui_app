<template>
  <div class="card">
    <h2>Create Account</h2>
    <div>
      <div class="input-group">
        <input type="text" name="fullname" required />
        <label for="fullname">Full Name</label>
      </div>
      <div class="input-group">
        <input type="email" name="email" required />
        <label for="email">Email</label>
      </div>
      <div class="input-group">
        <input type="text" name="username" required />
        <label for="username">Username</label>
      </div>
      <div class="input-group">
        <input type="password" name="password" required />
        <label for="password">Password</label>
      </div>
      <button type="button" class="bttn">Register</button>
    </div>
    <div class="card-footer">
      <p>Already have an account? <nuxt-link to="./login">Login</nuxt-link></p>
    </div>
  </div>
</template>
