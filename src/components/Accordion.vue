<template>
  <div class="accordion">
    <div class="accordion__item" v-for="(item, index) in items" :key="index">
      <button class="accordion__header" @click="toggle(index)" :aria-expanded="activeIndex === index">
        {{ item.title }}
      </button>
      <div class="accordion__content" v-show="activeIndex === index">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: { items: { type: Array, required: true } },
  data() { return { activeIndex: null }; },
  methods: { toggle(i) { this.activeIndex = this.activeIndex === i ? null : i; } }
};
</script>

<style scoped>
.accordion__header { width: 100%; text-align: left; padding: 1rem; background: var(--primary-color); color: white; border: none; cursor: pointer; }
.accordion__content { padding: 1rem; border: 1px solid #ccc; }
</style>
