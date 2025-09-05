<template>
  <div>
    <NavigationMenu />

    <section class="dashboard-section">
      <h2>FAQ</h2>
      <Accordion :items="accordionItems" />
    </section>

    <section class="dashboard-section">
      <h2>Data Table</h2>
      <DataTable
        :data="tableData"
        :columns="tableColumns"
        @row-click="handleRowClick"
      />

      <!-- Expanded details when a row is clicked -->
      <div v-if="selectedRow" class="details-card">
        <h3>Details for {{ selectedRow.name }}</h3>
        <p><strong>ID:</strong> {{ selectedRow.id }}</p>
        <p><strong>Role:</strong> {{ selectedRow.role }}</p>
        <p><strong>Department:</strong> {{ selectedRow.department }}</p>
        <p><strong>Salary:</strong> ${{ selectedRow.salary }}</p>
        <p><strong>Depreciation:</strong> {{ selectedRow.depreciation }}%</p>
        <p><strong>Status:</strong> {{ selectedRow.status }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import ThemeToggle from "../components/ThemeToggle.vue";
import ImageCarousel from "../components/ImageCarousel.vue";
import Accordion from "../components/Accordion.vue";
import DataTable from "../components/DataTable.vue";

export default {
  name: "Dashboard",
  components: {
    NavigationMenu,
    ThemeToggle,
    ImageCarousel,
    Accordion,
    DataTable,
  },
  data() {
    return {
      accordionItems: [
        {
          title: "What is BOBASH?",
          content:
            "Bobash is a cloud-based platform designed to analyze social data. It helps users generate revenue using social media, simplify workflow, or connect with services. Because it runs online, you can access it anytime, from anywhere, using just a browser or mobile device.",
        },
        {
          title: "Is it reliable?",
          content:
            "Yes, Bobash is built with reliability and security in mind. We use modern cloud infrastructure to ensure uptime and performance, so your data is always safe and your experience remains smooth. Our team also monitors the platform continuously and provides regular updates to keep everything running reliably.",
        },
      ],
      tableColumns: [
        { label: "ID", key: "id" },
        { label: "Name", key: "name" },
        { label: "Role", key: "role" },
      ],
      tableData: [
        {
          id: 1,
          name: "Alice",
          role: "Admin",
          department: "Finance",
          salary: 70000,
          depreciation: 5,
          status: "Active",
        },
        {
          id: 2,
          name: "Bob",
          role: "Editor",
          department: "Marketing",
          salary: 55000,
          depreciation: 7,
          status: "On Leave",
        },
        {
          id: 3,
          name: "Charlie",
          role: "Viewer",
          department: "Support",
          salary: 45000,
          depreciation: 10,
          status: "Active",
        },
        {
          id: 4,
          name: "Diana",
          role: "Manager",
          department: "Operations",
          salary: 80000,
          depreciation: 3,
          status: "Active",
        },
      ],
      selectedRow: null,
    };
  },
  methods: {
    handleRowClick(row) {
      this.selectedRow = row;
    },
  },
};
</script>

<style scoped>
.dashboard-section {
  margin: 3rem 2rem;
}

.details-card {
  margin-top: 1.5rem;
  padding: 1.5rem;
  border-radius: 10px;
  background: var(--background-color);
  color: var(--text-color);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
