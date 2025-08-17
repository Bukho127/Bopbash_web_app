<template>
  <div class="auth-page">
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
  name: "SignupPage",
  data: function() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    signup: function() {
      localStorage.setItem('auth', true);
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.auth-page { max-width: 400px; margin: 5rem auto; padding: 2rem; background: var(--background-color); border-radius: var(--border-radius); box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; }
input { display: block; width: 100%; margin-bottom: 1rem; padding: 0.75rem; border-radius: var(--border-radius); border: 1px solid #ccc; }
button { padding: 0.75rem 1.5rem; background: var(--primary-color); color: white; border: none; border-radius: var(--border-radius); cursor: pointer; }
</style>
