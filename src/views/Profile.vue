<template>
  <div>
    <NavigationMenu />
    
    <h1>Profile Settings</h1>
    <form @submit.prevent="updateProfile">
      <input type="text" v-model="name" placeholder="Name" />
      <input type="email" v-model="email" placeholder="Email" />

      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import NavigationMenu from '../components/NavigationMenu.vue';
import ThemeToggle from '../components/ThemeToggle.vue';

export default {
  name: "Profile",
  components: { NavigationMenu, ThemeToggle },
  data() { return { name: 'User', email: 'user@example.com' }; },
  methods: {
    updateProfile() { alert('Profile updated!'); }
  }
};
</script>

<style scoped>
form { max-width: 400px; margin: 2rem auto; display: flex; flex-direction: column; gap: 1rem; }
button { padding: 0.75rem; background: var(--primary-color); color: white; border-radius: var(--border-radius); border: none; cursor: pointer; }
</style>
