<template>
  <section>
    <!-- About Page Title -->
    <div class="about-header text-center py-16 bg-teal-700 text-white">
      <h1 class="text-5xl font-extrabold">Welcome to Coffee Bliss</h1>
      <p class="text-lg mt-4 text-gray-200">Step inside and discover your new favorite coffee spot!</p>
    </div>

    <!-- About the Coffee Shop -->
    <div class="about-coffee-shop py-16 bg-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Discover Coffee Bliss</h2>
        <p class="text-lg text-gray-600 mb-6">
          From the moment you step through our doors, you'll be welcomed by the enticing aroma of freshly brewed coffee. 
          At <span class="text-teal-500 font-semibold">Coffee Bliss</span>, we’re more than just a coffee shop — we’re a haven for coffee lovers.
        </p>
      </div>
    </div>

    <!-- Reception Area -->
    <div class="reception-area py-16 bg-teal-50">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-gray-900 mb-6 text-center">Reception Area</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p class="text-lg text-gray-600">
              Our reception area is designed to offer a warm welcome. From the vibrant decor to the friendly smiles of our staff, 
              you’ll feel right at home as soon as you walk in.
            </p>
          </div>
          <div>
            <img 
              src="@/assets/ImageStore2.jpg" 
              alt="Reception Area" 
              class="rounded-lg shadow-lg w-full object-cover"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Order Area -->
    <div class="order-area py-16 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-gray-900 mb-6 text-center">Order Area</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="@/assets/our-order.webp" 
              alt="Order Area" 
              class="rounded-lg shadow-lg w-full object-cover"
            >
          </div>
          <div>
            <p class="text-lg text-gray-600">
              Our order counter is where the magic begins! Watch as our expert baristas craft your drink to perfection using 
              premium ingredients and an eye for detail.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Seating Area -->
    <div class="seating-area py-16 bg-teal-50">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-gray-900 mb-6 text-center">Seating Area</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p class="text-lg text-gray-600">
              Whether you’re looking for a quiet corner to work or a cozy spot to catch up with friends, our seating area has 
              something for everyone. Comfortable chairs, free Wi-Fi, and plenty of outlets make it the perfect place to relax.
            </p>
          </div>
          <div>
            <img 
              src="@/assets/Seating-Area.jpg" 
              alt="Seating Area" 
              class="rounded-lg shadow-lg w-full object-cover"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Our History -->
    <div class="history py-16 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-gray-900 mb-6 text-center">Our History</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="@/assets/our-history.jpg" 
              alt="Our History" 
              class="rounded-lg shadow-lg w-full object-cover"
            >
          </div>
          <div>
            <p class="text-lg text-gray-600">
              Coffee Bliss began with a simple dream — to create a space where people could enjoy great coffee and connect. 
              From our humble beginnings as a small café, we’ve grown into a community favorite, known for our dedication to quality, 
              sustainability, and the people we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.about-header {
  background-image: url('@/assets/ImageStore1.jpeg');
  background-size: cover;
  background-position: center;
}

.container {
  max-width: 800px;
}

img {
  max-height: 400px;
  object-fit: cover;
}
</style>
