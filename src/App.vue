<template>
  <div id="app">
    <router-view />
    <!-- Optional global components (like NavigationMenu or ThemeToggle) 
         can be placed here if you want them on every page -->
    
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Global styles that apply to the whole app */
#app {
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
