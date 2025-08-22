<template>
  <div class="testimonials">
    <h2 class="heading">What Our Users Say</h2>
    <div class="testimonial-list">
      <div
        class="testimonial-card"
        v-for="(testimonial, index) in testimonials"
        :key="index"
      >
        <img
          class="testimonial-avatar"
          :src="testimonial.image"
          :alt="testimonial.author"
        />
        <p class="testimonial-text">"{{ testimonial.text }}"</p>
        <p class="testimonial-author">- {{ testimonial.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      testimonials: [
        {
          text: "This product changed my life!",
          author: "Alice",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
          text: "Amazing experience, highly recommend.",
          author: "Bob",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
          text: "Customer support was outstanding.",
          author: "Charlie",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          text: "Intuitive and easy to use.",
          author: "Diana",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.testimonials {
  padding: 3rem 1.5rem;
  background-color: var(--background-color);
  text-align: center;
}

.heading {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
}

.testimonial-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.testimonial-card {
  background:var(--background-color);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  max-width: 280px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.testimonial-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 2px solid #f97316; /* accent color */
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.5;
  color:white;
  margin-bottom: 1rem;
}

.testimonial-author {
  font-weight: 600;
  font-size: 0.9rem;
  color: #f97316;
}

@media (max-width: 768px) {
  .testimonial-list {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
