<template>
  <button
    class="theme-toggle"
    :class="{ active: theme === 'dark' }"
    @click="toggleTheme"
  >
    <div class="switch">
      <i class="fas" :class="theme === 'light' ? 'fa-sun' : 'fa-moon'"></i>
    </div>
  </button>
</template>

<script>
export default {
  name: "ThemeToggle",
  data() {
    return { theme: localStorage.getItem("theme") || "light" };
  },
  mounted() {
    document.documentElement.setAttribute("data-theme", this.theme);
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", this.theme);
      localStorage.setItem("theme", this.theme);
    },
  },
};
</script>

<style scoped>
.theme-toggle {
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: var(--secondary-color);
  border: 2px solid #ccc;
  cursor: pointer;
  padding: 2px;
  display: flex;
  align-items: center;
  transition: border 0.3s, background-color 0.3s;
}

.theme-toggle.active {
  border-color: orange;
}

.switch {
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
}

.theme-toggle.active .switch {
  transform: translateX(30px);
}

.switch i {
  color: var(--switch-icon-color);
  font-size: 14px;
  transition: transform 0.3s ease, color 0.3s;
}

.theme-toggle.active .switch i {
  color: black;
  transform: rotate(360deg);
}
</style>
