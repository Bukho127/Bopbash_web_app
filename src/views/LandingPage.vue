<template>
  <div class="landing-page">
    <NavigationMenu />
    <ThemeToggle />
   

    <section class="hero">
      <h1 class="hero__title">Turn Social Data Into Smarter Decisions</h1>
      <p class="hero__subtitle">
        Monitor, analyze, and optimize your social media performance effortlessly.
      </p>
      <div class="cta-buttons">
        <button class="hero__cta" @click="goToDashboard">GET STARTED</button>
        <button class="hero__cta" @click="goToDashboard">TRY IT FOR FREE
        <font-awesome-icon icon="arrow-right" />
        </button>
      </div>
      <div class="hero__image">
        <img src="/images/BOPDASH DASHBOARD.svg" alt="">
      </div>
    </section>

    <section class="features">
      <div
        class="feature"
        v-for="(feat, index) in features"
        :key="index"
        ref="featureRefs"
      >
        <h2>{{ feat.title }}</h2>
        <p>{{ feat.desc }}</p>
      </div>
    </section>

    <section class="carousel-section">
      <ImageCarousel :slides="carouselSlides" />
    </section>
    <SubscriptionPlans/>
    <Footer/>
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import ThemeToggle from "../components/ThemeToggle.vue";
import ImageCarousel from "../components/ImageCarousel.vue";
import Footer from '../components/FooterPage.vue';
import SubscriptionPlans from '../components/SubscriptionPlans.vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Subscription from './Subscription.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "LandingPage",
  components: { NavigationMenu, ThemeToggle, ImageCarousel, Footer, SubscriptionPlans },
  data() {
    return {
      features: [
        { title: "Social Media Monitoring", desc: "Track mentions, hashtags, and trends across multiple platforms" },
        { title: "Automated Reports", desc: "Receive weekly or monthly reports via email or PDF." },
        { title: "Competitor Analysis", desc: "Compare your social performance against competitors" },
        {
          title: "Keyword Tracking",
          desc: "Discover trending hashtags and keywords relevant to your niche",
        },
      ],
      carouselSlides: [
        { id: 1, image: "/images/boss-75.jpg", caption: "Slide 1" },
        { id: 2, image: "/images/cue.jpg", caption: "Slide 2" },
        { id: 3, image: "/images/street.webp", caption: "Slide 3" },
      ],
      featureRefs: [],
    };
  },
  mounted() {
    this.featureRefs = this.$refs.featureRefs || [];

    // Hero animation using GSAP
    gsap.from(".hero__title", { y: -50, opacity: 0, duration: 1 });
    gsap.from(".hero__subtitle", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });
    gsap.from(".hero__cta", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
    });
    
  gsap.from(".hero__image", {
  y: 30,
  opacity: 0,
  scale: 0.9,
  duration: 0.8,
  delay: 0.5,
  ease: "power2.out"
});

    // Feature cards animation
    if (this.featureRefs.length) {
      gsap.from(this.featureRefs, {
        scrollTrigger: { trigger: ".features", start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
      });
    }
  },
  methods: {
    goToDashboard() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: radial-gradient(circle, #4f46e5, #f59e0b);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero__title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.hero__cta {
 background-color: var(--background-color);
  padding: 1rem 2rem;
  color:white;
  border: none;
  gap: 5px;
  font-size: 1rem;
  font: bold;
  cursor: pointer;
  border-radius: 5px;
  margin: 0.5rem;

}

.hero__cta:hover {
  border:none;
  box-shadow: inset 0 0 0 1px rgba(255, 115, 0, 0.8);
  color:rgba(255, 115, 0, 0.8);
}

.hero__image{
  width: 100%;
  flex-shrink: 0;
}

.hero__image img {
  max-width: 1200px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0; 
}
@media (max-width: 768px) {
  .hero {
    padding: 4rem 1rem;
  }
  .hero__image {
    width: 100%;
    max-width: 800px;      /* scale down on mobile */
    margin-top: 1.5rem;
  }

  .hero__cta{
    width: 90%;
    margin: 0.5rem 0;
    height: 4.5rem;

  }

}
.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;
}

.feature {
  background: var(--background-color);
  padding: 2rem;
  border-radius: var(--border-radius);
  flex: 1 1 200px;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.carousel-section {
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
}
</style>
