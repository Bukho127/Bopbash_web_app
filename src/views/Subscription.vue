<template>
  <div>
    <NavigationMenu />
    <ThemeToggle />
    <h1>Subscription Management</h1>
    <div class="plans">
      <div class="plan" v-for="plan in plans" :key="plan.name">
        <h2>{{ plan.name }}</h2>
        <p>{{ plan.price }}</p>
        <button @click="selectPlan(plan.name)">Choose</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscription",
  data() {
    return {
      plans: [
        { name: 'Free', price: '$0/month' },
        { name: 'Pro', price: '$19/month' },
        { name: 'Enterprise', price: '$99/month' }
      ]
    };
  },
  methods: {
    selectPlan(plan) { alert(`You selected ${plan}`); }
  }
};
</script>

<style scoped>
.plans { display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem; }
.plan { background: var(--background-color); padding: 2rem; border-radius: var(--border-radius); box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; }
.plan button { margin-top: 1rem; padding: 0.5rem 1rem; border: none; border-radius: var(--border-radius); background: var(--primary-color); color: white; cursor: pointer; }
</style>
