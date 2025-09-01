<template>
  <div class="landing-page">
    <NavigationMenu />

    <section class="hero">
      <h1 class="hero__title">Turn Social Data Into Smarter Decisions</h1>
      <p class="hero__subtitle">
        Monitor, analyze, and optimize your social media performance
        effortlessly.
      </p>
      <div class="cta-buttons">
        <button class="hero__cta" @click="goToDashboard">GET STARTED</button>
        <button class="hero__cta" @click="goToDashboard">
          TRY IT FOR FREE
          <font-awesome-icon icon="arrow-right" />
        </button>
      </div>
      <div class="hero__image">
        <img src="/images/BOPDASH DASHBOARD.svg" alt="" />
      </div>
    </section>

    <section class="features">
      <div
        class="feature"
        v-for="(feat, index) in features"
        :key="index"
        ref="featureRefs"
      >
        <font-awesome-icon :icon="feat.icon" size="2x" class="feature-icon" />
        <h2>{{ feat.title }}</h2>
        <p>{{ feat.desc }}</p>
      </div>
    </section>

    <section class="carousel-section">
      <ImageCarousel :slides="carouselSlides" />
    </section>
     <CallToActionBar />
    <Testimonial />
    <SubscriptionPlans />
    <Footer />
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import ImageCarousel from "../components/ImageCarousel.vue";
import Footer from "../components/FooterPage.vue";
import CallToActionBar from "@/components/CallToActionBar.vue";
import SubscriptionPlans from "../components/SubscriptionPlans.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonial from "../components/Testimonial.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEye,
  faFileAlt,
  faChartLine,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "LandingPage",
  components: {
    NavigationMenu,
    ImageCarousel,
    Footer,
    SubscriptionPlans,
    Testimonial,
    FontAwesomeIcon,
    CallToActionBar,
  },
  data() {
    return {
      features: [
        {
          title: "Social Media Monitoring",
          desc: "Track mentions, hashtags, and trends across multiple platforms",
          icon: faEye,
        },
        {
          title: "Automated Reports",
          desc: "Receive weekly or monthly reports via email or PDF.",
          icon: faFileAlt,
        },
        {
          title: "Competitor Analysis",
          desc: "Compare your social performance against competitors",
          icon: faChartLine,
        },
        {
          title: "Keyword Tracking",
          desc: "Discover trending hashtags and keywords relevant to your niche",
          icon: faHashtag,
        },
      ],
      carouselSlides: [
        { id: 1, image: "/images/homepage2.png", caption: "Slide 1" },
        { id: 2, image: "/images/homepage2.png", caption: "Slide 2" },
        { id: 3, image: "/images/homepage3.png", caption: "Slide 3" },
        { id: 4, image: "/images/homepage4.png", caption: "Slide 3" },
        { id: 5, image: "/images/homepage5.png", caption: "Slide 3" },
      ],
      featureRefs: [],
    };
  },
  mounted() {
    this.featureRefs = this.$refs.featureRefs || [];

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
      ease: "power2.out",
    });

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
  color: white;
  border: none;
  gap: 5px;
  font-size: 1rem;
  font: bold;
  cursor: pointer;
  border-radius: 5px;
  margin: 0.5rem;
}
.hero__cta:hover {
  border: none;
  box-shadow: inset 0 0 0 1px rgba(255, 115, 0, 0.8);
  color: rgba(255, 115, 0, 0.8);
}
.hero__image {
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
  text-align: center;
}
.feature-icon {
  margin-bottom: 1rem;
  color: white;
}
.carousel-section {
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
}
</style>
