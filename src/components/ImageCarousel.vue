<template>
  <div class="content-container">
    <div class="text-content">
      <h1>Plan, schedule, and optimize your social media content effortlessly.</h1>
      <p>Manage multiple social media accounts, schedule posts, and analyze performance all in one place.</p>
      <div class="percentContainer">
        <span>35%</span>
        <p class="text"> managing social media campaigns with Bopbash</p>
      </div>    
    </div>

    <div class="carousel" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div 
          v-for="(slide, index) in displayedSlides" 
          :key="index"
          class="carousel-item"
        >
          <img :src="slide.image" :alt="slide.caption" />
        </div>
      </div>

      <button class="carousel-btn prev" @click="prevSlide" aria-label="Previous slide">&lt;</button>
      <button class="carousel-btn next" @click="nextSlide" aria-label="Next slide">&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThreeImageCarousel",
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    maxSlides: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      currentIndex: 0,
      timer: null
    };
  },
  computed: {
    displayedSlides() {
      return this.slides.slice(0, this.maxSlides);
    }
  },
  mounted() {
    if (this.autoplay && this.displayedSlides.length) {
      this.startAutoplay();
    }
  },
  beforeUnmount() {
    this.stopAutoplay();
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.displayedSlides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.displayedSlides.length) % this.displayedSlides.length;
    },
    startAutoplay() {
      if (this.autoplay && this.displayedSlides.length > 1) {
        this.stopAutoplay();
        this.timer = setInterval(this.nextSlide, this.interval);
      }
    },
    stopAutoplay() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  }
};
</script>

<style scoped>
.content-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
}

.text-content {
  max-width: 32rem;
}

.text-content p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.text-content span {
  color: orange;
  font-weight: bold;
  font-size: 3rem;
}

.text-content h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.percentContainer {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 2rem;
}

.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  flex-shrink: 0;
}

.carousel img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.4);
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 10;
}

.carousel-btn.prev { left: 10px; }
.carousel-btn.next { right: 10px; }

@media (max-width: 768px) {
  .content-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .percentContainer {
    flex-direction: column;
  }

  .text {
    display: none;
  }
}
</style>
