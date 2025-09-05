<template>
  <nav class="nav">
    <div class="logo">
      <img src="@/assets/Bopdash.svg" alt="Logo" class="logo" />
    </div>
    <div class="nav__right">
      <button class="nav__toggle" @click="toggleMenu" aria-label="Toggle menu">
        <font-awesome-icon icon="bars" />
      </button>
      <ul :class="['nav__list', { 'nav__list--open': isOpen }]" role="menubar">
        <li class="nav__item nav__close-btn">
          <button @click="toggleMenu" aria-label="Close menu">&times;</button>
        </li>

        <li class="nav__item" role="none">
          <a href="/" role="menuitem">Home</a>
        </li>

        <li class="nav__item nav__dropdown" role="none">
          <button
            class="dropdown__toggle"
            @click="toggleDropdown"
            role="menuitem"
          >
            Solutions
            <font-awesome-icon
              :icon="dropdownOpen ? 'chevron-up' : 'chevron-down'"
            />
          </button>
          <ul v-if="dropdownOpen" class="dropdown__menu">
            <li><a href="/analytics-insights">Analytics & Insights</a></li>
            <li><a href="/social-listening">Social Listening</a></li>
            <li><a href="/content-optimization">Content Optimization</a></li>
            <li><a href="/campaign-management">Campaign Management</a></li>
            <li><a href="/automation-reporting">Automation & Reporting</a></li>
            <li>
              <a href="/influencer-competitor-tracking"
                >Influencer & Competitor Tracking</a
              >
            </li>
          </ul>
        </li>

        <li class="nav__item" role="none">
          <a href="/profile" role="menuitem">Profile</a>
        </li>
        <li class="nav__item" role="none">
          <a href="/pricing" role="menuitem">Pricing</a>
        </li>
        <li class="nav__item" role="none">
          <a href="/contacts" role="menuitem">Contact</a>
        </li>

        <li class="nav__item nav__auth" role="none">
          <a href="/get-started" role="menuitem">TALK TO SALES</a>
        </li>
        <li class="nav__item nav__auth" role="none">
          <a href="/login" role="menuitem">GET STARTED</a>
        </li>
      </ul>
      <ThemeToggle />
    </div>
  </nav>
</template>

<script>
import ThemeToggle from "./ThemeToggle.vue";
export default {
  name: "NavigationMenu",
  components: {
    ThemeToggle,
  },
  data() {
    return {
      isOpen: false,
      dropdownOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
  },
};
</script>

<style scoped>
.nav__close-btn {
  display: none;
}
.logo {
  height: 30px;
  width: auto;
  display: block;
}

.nav {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: white;
  z-index: 1000;
}

.nav__right {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
}

.nav__toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
}
li a:hover {
  color: orange;
  transition: 0.8ms ease-in-out;
}
.nav__list {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  list-style: none;
  margin-left: auto;
}

.nav__auth {
  padding: 0.8rem 1rem;
  border: solid 1px rgb(255, 115, 0);
  border-radius: 5px;
  color: white;
  font-size: small;
  font-weight: 600;
  transition: 0.5s ease-in-out;
}
.nav__auth:hover {
  background-color: rgb(255, 115, 0);
  color: white;
}

.nav__dropdown {
  position: relative;
}

.dropdown__toggle {
  background: none;
  border: none;
  color: white;
  font: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.dropdown__toggle svg {
  width: 0.7em;
  height: 0.7em;
}

.dropdown__menu {
  position: absolute;
  top: 2.5rem;
  left: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.85);
  background: #1f2937;
  border-radius: 5px;
  list-style: none;
  margin-top: 0.7rem;
  padding: 0.5rem 0;
  min-width: 200px;
  z-index: 1001;
}

.dropdown__menu li {
  padding: 0.5rem 1rem;
}

.dropdown__menu li a {
  color: white;
  text-decoration: none;
  display: block;
}

.dropdown__menu li:hover {
  background: rgba(255, 115, 0, 0.8);
}

@media (max-width: 768px) {
  .nav__toggle {
    display: block;
  }

  .nav__list {
    position: fixed;
    right: 0;
    top: -1rem;
    display: none;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1.5rem;
    background-color: var(--background-color, #1f2937);
    height: 100vh;
    width: min(15em, 100%);
    z-index: 1000;
    align-items: flex-start;
    text-align: left;
  }
  .nav__close-btn {
    width: 100%;
    display: flex;
    margin-bottom: 1rem;
    margin-left: 11rem;
  }

  .nav__close-btn button {
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    line-height: 1;
  }

  .nav__list.nav__list--open {
    display: flex;
  }

  .dropdown__menu {
    position: static;
    background: transparent;
    padding: 0;
    min-width: auto;
  }

  .dropdown__menu li {
    padding: 0.5rem 0;
  }
}
.nav__right {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 1.5rem;
}
</style>
