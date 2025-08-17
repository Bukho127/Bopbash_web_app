<template>
  <div>
    <NavigationMenu />
    <ThemeToggle />

    <h1>Component Showcase</h1>

    <section class="dashboard-section">
      <h2>Carousel</h2>
      <ImageCarousel :images="carouselImages" />
    </section>

    <section class="dashboard-section">
      <h2>Accordion</h2>
      <Accordion :items="accordionItems" />
    </section>

    <section class="dashboard-section">
      <h2>Data Table</h2>
      <DataTable :data="tableData" :columns="tableColumns" />
    </section>
  </div>
</template>

<script>
import NavigationMenu from '../components/NavigationMenu.vue';
import ThemeToggle from '../components/ThemeToggle.vue';
import ImageCarousel from '../components/ImageCarousel.vue';
import Accordion from '../components/Accordion.vue';
import DataTable from '../components/DataTable.vue';

export default {
  name: "Dashboard",
  components: { NavigationMenu, ThemeToggle, ImageCarousel, Accordion, DataTable },
  data() {
    return {
      carouselImages: [
        '/assets/logo.png', '/assets/logo.png', '/assets/logo.png'
      ],
      accordionItems: [
        { title: 'What is MWCT?', content: 'A modern UI component toolkit.' },
        { title: 'How to use?', content: 'Import components and reuse them.' }
      ],
      tableColumns: [
        { label: 'ID', key: 'id' },
        { label: 'Name', key: 'name' },
        { label: 'Role', key: 'role' }
      ],
      tableData: [
        { id: 1, name: 'Alice', role: 'Admin' },
        { id: 2, name: 'Bob', role: 'Editor' },
        { id: 3, name: 'Charlie', role: 'Viewer' }
      ]
    };
  }
};
</script>

<style scoped>
.dashboard-section { margin: 3rem 2rem; }
</style>
