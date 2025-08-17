<template>
<button @click="toggleTheme">
  <i :class="theme === 'light' ? 'fas fa-sun' : 'fas fa-moon'"></i>
</button>
</template>

<script>
export default {
  name: "ThemeToggle",
  data() {
    return { theme: localStorage.getItem('theme') || 'light' };
  },
  mounted() {
    document.documentElement.setAttribute('data-theme', this.theme);
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', this.theme);
      localStorage.setItem('theme', this.theme);
    }
  }
};
</script>

<style scoped>
.theme-toggle {
  background:var(--primary-color);
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
button{
  position: fixed;
  top: 7rem;
  right: 1rem;
  z-index: 1000;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  padding: 1rem 4rem;
  size: 2rem;
}
</style>
