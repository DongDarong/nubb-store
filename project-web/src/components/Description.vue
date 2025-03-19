<template>
  <section>
    <!-- Cover Image Section with Parallax Effect -->
    <div class="relative overflow-hidden">
      <img
        src="@/assets/CoverImage2.jpg"
        alt="Cover Image"
        class="w-full h-80 object-cover rounded-xl shadow-lg"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center text-white z-10">
        <h1 class="text-5xl font-extrabold text-teal-500 drop-shadow-lg">
          Welcome to Coffee Bliss
        </h1>
      </div>
    </div>

    <!-- About Section -->
    <div class="bg-white py-16">
      <div class="container mx-auto px-6 grid gap-8 md:grid-cols-2">
        <!-- Text Content -->
        <div class="text-left">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">About Our Shop</h2>
          <p class="text-gray-500 text-lg leading-relaxed mb-6">
            Welcome to <span class="text-teal-500 font-semibold">Coffee Bliss</span>! We are committed to serving the finest coffee made with high-quality beans and a warm atmosphere to make your experience unforgettable.
          </p>
          <div class="flex items-center gap-3 text-gray-700 text-lg">
            <i class="fas fa-clock text-teal-500"></i>
            <span class="font-medium">Opening Hours:</span>
            <span>Mon-Sun, 7:00 AM - 10:00 PM</span>
          </div>
        </div>
        <!-- Store Image -->
        <img
          src="@/assets/ImageStore1.jpeg"
          alt="Coffee Shop"
          class="w-full h-auto rounded-xl shadow-xl object-cover"
        />
      </div>
    </div>

    <!-- Product Categories Section -->
    <div class="bg-gray-50 py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-10">
          Product Categories
        </h2>
        <div class="grid gap-8 md:grid-cols-3">
          <div
            v-for="category in categories"
            :key="category.id"
            class="bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <h3 class="text-2xl font-semibold text-teal-500 mb-4">
              {{ category.name }}
            </h3>
            <p class="text-gray-500 text-lg">{{ category.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- New Products Section -->
    <div class="bg-gradient-to-b from-gray-100 to-white py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-10">
          New Arrivals & Special Discounts
        </h2>
        <div class="grid gap-8 md:grid-cols-3">
          <div
            v-for="product in products"
            :key="product.id"
            class="bg-white p-6 rounded-lg shadow-lg hover:translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer"
            @click="handleProductClick(product)"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-2xl font-semibold text-teal-500 mb-2">
              {{ product.name }}
            </h3>
            <p class="text-gray-500 text-lg mb-4">{{ product.description }}</p>
            <span class="text-xl font-bold text-gray-800">{{ product.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref([
  {
    id: 1,
    name: 'Coffee',
    description: 'Experience the perfect blend of bold and aromatic espresso, crafted to awaken your senses.',
  },
  {
    id: 2,
    name: 'Pastries',
    description: 'Indulge in our freshly baked pastries, a delightful treat for every craving.',
  },
  {
    id: 3,
    name: 'Cold Beverages',
    description: 'Cool off with our refreshing seasonal drinks, made to quench your thirst.',
  },
]);

const products = ref([
  {
    id: 1,
    name: 'Caramel Latte',
    description:
      'Indulge in the rich, creamy flavor of our new Caramel Latte. A perfect blend of sweetness and coffee goodness!',
    price: '$4.99',
    image: '../assets/Coffee/Latte.jpg',
  },
  {
    id: 2,
    name: 'Espresso Shot',
    description: 'Special Offer: Get 20% off on our bold and aromatic espresso shots. Don’t miss out!',
    price: '$2.00',
    image: '../assets/Coffee/Espresso.jpg',
  },
  {
    id: 3,
    name: 'Pumpkin Spice Latte',
    description:
      'Savor the essence of fall with our limited-edition Pumpkin Spice Latte, crafted for the season.',
    price: '$5.49',
    image: '../assets/Coffee/Affogato.jpg',
  },
]);

const handleProductClick = (product) => {
  console.log(product);
};
</script>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
</style>
