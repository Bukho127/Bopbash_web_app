<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      localStorage.setItem('auth', true);
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 2rem auto;
}
input, button {
  margin: 0.5rem 0;
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
