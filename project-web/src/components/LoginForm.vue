<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-6">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>
        
        <form @submit.prevent="loginUser">
          <div class="mb-4">
            <label for="email" class="block text-lg font-semibold text-gray-700">Email</label>
            <input 
              v-model="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              class="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-200"
              required
            />
          </div>

          <div class="mb-4">
            <label for="password" class="block text-lg font-semibold text-gray-700">Password</label>
            <input 
              v-model="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              class="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-200"
              required
            />
          </div>

          <div class="mb-6">
            <button type="submit" class="bg-teal-600 hover:bg-teal-700 text-white py-2 w-full rounded-lg">Login</button>
          </div>

          <p class="text-center text-gray-500">
            Don't have an account? 
            <router-link to="/register" class="text-teal-600 hover:underline">Register here</router-link>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');

const loginUser = () => {
  // Simple login validation for demo purposes
  if (email.value === 'user@example.com' && password.value === 'password123') {
    // Storing the token for demo purposes
    localStorage.setItem('auth_token', 'demo_token');
    router.push('/order'); // Redirect to the order page after login
  } else {
    alert('Invalid credentials');
  }
};
</script>

<style scoped>
/* Add custom styles here */
</style>
