<template>
  <section class="plans">
    <h2 class="plans__title">Choose Your Plan</h2>
    <div class="plans__grid">
      <div
        v-for="(plan, index) in plans"
        :key="index"
        class="plan-card"
        :class="{ 'plan-card--highlight': plan.popular }"
      >
        <h3>{{ plan.name }}</h3>
        <p class="plan-price">
          <span class="currency">R</span>{{ plan.price }}
          <span class="period">/mo</span>
        </p>
        <ul class="plan-features">
          <li v-for="(feat, i) in plan.features" :key="i">{{ feat }}</li>
        </ul>
        <button class="plan-btn">{{ plan.cta }}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SubscriptionPlans",
  data() {
    return {
      plans: [
        {
          name: "Starter",
          price: 500,
          features: ["Multi-platform coverage", "Email Support", "Unlimited dashboards"],
          cta: "Get Started",
          popular: false,
        },
        {
          name: "Pro",
          price: 1699,
          features: [
            "Access to 50,000 API",
            "Daily refresh rate for updates",
            "Community support",
          ],
          cta: "Choose Pro",
          popular: true, // highlight this one
        },
        {
          name: "Enterprise",
          price: 8000,
          features: [
            "Unlimited API requests/month",
            "Real-time streaming API",
            "Customizable reports",
            "Team access",
            "Dedicated account manager",
          ],
          cta: "Contact Sales",
          popular: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.plans {
  text-align: center;
  padding: 4rem 2rem;
}

.plans__title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.plans__grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
}

.plan-card {
  background: var(--background-color, #fff);
  padding: 2rem;
  border-radius: var(--border-radius, 10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 15rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.plan-card--highlight {
  border: 1px solid rgb(255, 115, 0);
  
}

.plan-card:hover {
  transform: translateY(-7px);
}

.plan-price {
  font-size: 2rem;
  margin: 1rem 0;
  color: rgb(255, 115, 0);
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 1rem 0 2rem;
}

.plan-features li {
  margin: 0.5rem 0;
}

.plan-btn {
  background:transparent;
  color: white;
  padding: 0.75rem 1.5rem;
  border:rgb(255, 115, 0 ) solid 1px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.plan-btn:hover {
  background:rgb(255, 115, 0);
}
</style>
