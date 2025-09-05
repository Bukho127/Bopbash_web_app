<template>
  <footer class="footer">
    <hr />
    <PreFooter />
    <hr />
    <div class="footer-content">
      <p>
        &copy; {{ currentYear }} BOPBASH, a Spana Technologies company. All
        rights reserved.
      </p>
      <div class="social-links">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import PreFooter from "../components/PreFooter.vue";

export default {
  name: "FooterPage",
  components: { PreFooter },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>


<style scoped>
hr {
  margin-bottom: 3rem;
  width: 80%;
  height: 0.1px;
  border: none;
  background-color: #465b78;
}
.footer {
  margin-top: 2rem;
  background-color: var(--background-color);
  color: #b0b0b0;
  font-size: 0.9rem;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  max-width: 900px;
  margin: 0 auto;
}

.social-links {
  margin-top: 10px;
}

.social-links a {
  display: inline-block;
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.social-links a:hover {
  color: rgb(255, 115, 0);
}

@media screen and (max-width: 768px) {
  hr {
    margin-bottom: 1rem;
    width: 90%;
  }
  p {
    text-align: left;
    margin: 2rem 1.5rem 3rem 1rem;
  }
}
</style>
