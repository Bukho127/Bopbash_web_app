<template>
  <div class="carousel">
    <div class="carousel-inner">
     <div 
  v-for="(slide, index) in slides" 
  :key="index"
  class="carousel-item"
  :class="{ active: index === currentIndex }"
>
  <img :src="slide.image" :alt="slide.caption" />
</div>

    </div>

    <button class="carousel-btn prev" @click="prevSlide">&lt;</button>
    <button class="carousel-btn next" @click="nextSlide">&gt;</button>
  </div>
</template>

<script>
export default {
  name: "ImageCarousel",
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      currentIndex: 0,
      timer: null
    };
  },
  mounted() {
    if (this.autoplay && this.slides.length) {
      this.startAutoplay();
    }
  },
  beforeUnmount() {
    this.stopAutoplay();
  },
  methods: {
    nextSlide() {
      if (!this.slides || !this.slides.length) return;
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      if (!this.slides || !this.slides.length) return;
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    startAutoplay() {
      this.timer = setInterval(() => {
        this.nextSlide();
      }, this.interval);
    },
    stopAutoplay() {
      if (this.timer) clearInterval(this.timer);
    }
  }
};
</script>
<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
}

.carousel-item.active {
  opacity: 1;
  position: relative;
}

.carousel img {
  width: 100%;       /* make it fit the width of container */
  height: auto;      /* keep aspect ratio */
  display: block;
  object-fit: cover; /* scale & crop if needed */
  max-height: 400px; /* optional, limits very tall images */
}
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.4);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 10;
}

.carousel-btn.prev {
  left: 10px;
}

.carousel-btn.next {
  right: 10px;
}
</style>
