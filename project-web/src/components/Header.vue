<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo and Title -->
      <div class="flex items-center space-x-3">
        <router-link to="/">
          <img src="@/assets/LogpBlissCaffee.jpg" alt="Logo" class="h-12 w-12 rounded-full border border-teal-500 shadow-sm">
        </router-link>
          <h1 class="text-xl font-semibold text-gray-800 tracking-tight">Coffee Bliss</h1>
        
      </div>

      <!-- Hamburger Menu for Mobile -->
      <button 
        @click="toggleMobileNav" 
        class="block md:hidden text-gray-700 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Navigation -->
      <nav :class="mobileNavVisible ? 'block' : 'hidden md:flex'" class="absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:py-0 py-4">
        <ul class="flex flex-col md:flex-row md:space-x-6 text-sm md:text-base font-medium text-gray-700">
          <li>
            <router-link 
              to="/" 
              class="block px-4 py-2 md:px-0 md:py-0 hover:text-teal-500 transition-colors duration-300"
              active-class="text-teal-500 font-bold"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link 
              to="/menu" 
              class="block px-4 py-2 md:px-0 md:py-0 hover:text-teal-500 transition-colors duration-300" 
              active-class="text-teal-500 font-bold"
            >
              Menu
            </router-link>
          </li>
          
          <li>
            <router-link 
              to="/about" 
              class="block px-4 py-2 md:px-0 md:py-0 hover:text-teal-500 transition-colors duration-300"
              active-class="text-teal-500 font-bold"
            >
              About
            </router-link>
          </li>
          <li>
            <router-link 
              to="/contact" 
              class="block px-4 py-2 md:px-0 md:py-0 hover:text-teal-500 transition-colors duration-300"
              active-class="text-teal-500 font-bold"
            >
              Contact
            </router-link>
          </li>
          <!-- Avatar Profile for Mobile -->
          <li v-if="mobileNavVisible" class="md:hidden">
            <div class="flex items-center px-4 py-2">
              <img 
                src="@/assets/Boy.png" 
                alt="Profile Avatar" 
                class="h-10 w-10 rounded-full border border-teal-500 shadow-md cursor-pointer"
                @click="toggleDropdown"
              >
              <span class="ml-3 text-gray-700 font-medium">Your Profile</span>
            </div>
            <!-- Dropdown Menu -->
            <div 
              v-if="dropdownVisible" 
              class="bg-white border-t border-gray-200 py-2"
            >
              <RouterLink 
                to="/profile" 
                class="block px-4 py-3 text-gray-700 text-sm font-medium hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
              >
                <i class="fas fa-user-circle mr-2 text-teal-500"></i> Profile
              </RouterLink>
              <Routerlink 
                to="/login" 
                class="block px-4 py-3 text-gray-700 text-sm font-medium hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
              >
                <i class="fas fa-sign-out-alt mr-2 text-red-500"></i> Logout
              </Routerlink>
            </div>
          </li>
          <li>
            <router-link 
              to="/order" 
              class="block px-4 py-2 md:px-0 md:py-0 hover:text-teal-500 transition-colors duration-300" 
              active-class="text-teal-500 font-bold"
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Avatar Profile for Desktop -->
      <div class="relative hidden md:block">
        <img 
          src="@/assets/Boy.png" 
          alt="Profile Avatar" 
          class="h-10 w-10 rounded-full border border-teal-500 shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
          @click="toggleDropdown"
        >
        <!-- Dropdown Menu -->
        <div 
          v-if="dropdownVisible" 
          class="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 transform origin-top-right scale-95 transition-transform duration-200 ease-out"
        >
          <RouterLink 
            to="/profile" 
            class="block px-4 py-3 text-gray-700 text-sm font-medium hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
          >
            <i class="fas fa-user-circle mr-2 text-teal-500"></i> Profile
          </RouterLink>
          <hr class="my-1 border-gray-200">
          <RouterLink 
            to="/login" 
            class="block px-4 py-3 text-gray-700 text-sm font-medium hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
          >
            <i class="fas fa-sign-out-alt mr-2 text-red-500"></i> Logout
          </RouterLink>
        </div>
        
      </div>
      
    </div>
  </header>
</template>

<script setup>

import { ref } from 'vue';

const dropdownVisible = ref(false);
const mobileNavVisible = ref(false);

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

const toggleMobileNav = () => {
  mobileNavVisible.value = !mobileNavVisible.value;
};
</script>
<style>
@import '@fortawesome/fontawesome-free/css/all.css';
</style>
