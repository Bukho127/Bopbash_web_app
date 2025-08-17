<template>
  <div class="data-table">
    <table>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key" @click="sort(col.key)">
            {{ col.label }} <span>{{ sortKey === col.key ? (sortAsc ? '▲' : '▼') : '' }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in paginatedData" :key="row.id">
          <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
      <span>Page {{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    data: { type: Array, required: true },
    columns: { type: Array, required: true },
    perPage: { type: Number, default: 5 }
  },
  data() {
    return { currentPage: 1, sortKey: null, sortAsc: true };
  },
  computed: {
    sortedData() {
      if(!this.sortKey) return this.data;
      return [...this.data].sort((a,b) => {
        if(a[this.sortKey] < b[this.sortKey]) return this.sortAsc ? -1 : 1;
        if(a[this.sortKey] > b[this.sortKey]) return this.sortAsc ? 1 : -1;
        return 0;
      });
    },
    totalPages() { return Math.ceil(this.data.length / this.perPage); },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.sortedData.slice(start, start + this.perPage);
    }
  },
  methods: {
    sort(key) {
      if(this.sortKey === key) this.sortAsc = !this.sortAsc;
      else { this.sortKey = key; this.sortAsc = true; }
    },
    prevPage() { if(this.currentPage > 1) this.currentPage--; },
    nextPage() { if(this.currentPage < this.totalPages) this.currentPage++; }
  }
};
</script>

<style scoped>
.data-table table { width: 100%; border-collapse: collapse; }
.data-table th, .data-table td { border: 1px solid #ccc; padding: 0.5rem; }
.data-table th { cursor: pointer; background: var(--primary-color); color: white; }
.pagination { margin-top: 1rem; display: flex; justify-content: center; align-items: center; gap: 1rem; }
</style>
