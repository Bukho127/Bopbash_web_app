<template>
  <section class="scroll-carousel">
    <div class="scroll-wrapper" ref="carousel" v-if="!isMobile">
      <div class="scroll-item" v-for="(img, i) in images" :key="i">
        <img :src="img" alt="carousel image" />
      </div>
    </div>
    <div v-else class="mobile-image">
      <img :src="images[0]" alt="carousel image" />
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, computed } from "vue";
import gsap from "gsap";

const carousel = ref(null);
const currentIndex = ref(0);

const images = [
  "/images/Group 1.png",
  "/images/Group 2.png",
  "/images/Group 3.png",
];

let isAnimating = false;

// Detect if screen is mobile
const isMobile = ref(false);

function updateIsMobile() {
  isMobile.value = window.innerWidth <= 768; // adjust breakpoint if needed
}

function goToSlide(index) {
  if (isAnimating) return;
  isAnimating = true;

  const sections = carousel.value.querySelectorAll(".scroll-item");

  gsap.to(carousel.value, {
    x: -index * sections[0].offsetWidth,
    duration: 0.8,
    ease: "power2.inOut",
    onComplete: () => {
      isAnimating = false;
      currentIndex.value = index;
    },
  });
}

function handleWheel(e) {
  if (isAnimating || isMobile.value) {
    e.preventDefault();
    return;
  }

  // scrolling down
  if (e.deltaY > 0 && currentIndex.value < images.length - 1) {
    e.preventDefault();
    goToSlide(currentIndex.value + 1);
  }
  // scrolling up
  else if (e.deltaY < 0 && currentIndex.value > 0) {
    e.preventDefault();
    goToSlide(currentIndex.value - 1);
  }
}

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);

  if (carousel.value && !isMobile.value) {
    carousel.value.addEventListener("wheel", handleWheel, { passive: false });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateIsMobile);

  if (carousel.value) {
    carousel.value.removeEventListener("wheel", handleWheel);
  }
});
</script>

<style scoped>
.scroll-carousel {
  width: 100%;
  overflow: hidden;
}

.scroll-wrapper {
  display: flex;
  transition: transform 0.8s ease;
  gap: 3rem;
  margin-left: 1rem;
}

.scroll-item {
  flex: 0 0 auto;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-item img {
  width: 100%;
  height: auto;
  border-radius: 16px;
}

/* Mobile view: show single image */
.mobile-image img {
  width: 100%;
  height: auto;
  border-radius: 16px;
}
</style>
