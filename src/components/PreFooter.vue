<template>
  <section class="pre-footer">
    <div class="container">
      <div class="columns">
        <!-- Product -->
        <div class="column">
          <h3>Product</h3>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Demo</a></li>
          </ul>
        </div>

        <!-- Solutions -->
        <div class="column">
          <h3>Solutions</h3>
          <ul>
            <li><a href="#">For Teams</a></li>
            <li><a href="#">For Enterprises</a></li>
            <li><a href="#">For Developers</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PreFooter"
}
</script>

<style scoped>
.pre-footer {
  background: var(--background-color);
  padding: 3rem 1rem;
  
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.column h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color:gray;
}

.column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.column li {
  margin-bottom: 0.5rem;
}

.column a {
  color: gray;
  text-decoration: none;
}

.column a:hover {
  color: #000;
}

li{
    padding: 20px;
}
</style>
