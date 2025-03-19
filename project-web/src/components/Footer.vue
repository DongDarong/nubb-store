<template>
  <footer class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
    <div class="container mx-auto text-center">
      <!-- Logo -->
      <div class="mb-8">
        <img
          src="@/assets/LogpBlissCaffee.jpg"
          alt="Coffee Bliss Logo"
          class="mx-auto w-20 h-20 rounded-full shadow-md transition-transform transform hover:scale-110"
        />
      </div>

      <!-- Copyright Info -->
      <p class="text-sm text-gray-400 mb-6">
        &copy; 2025 <span class="font-semibold text-teal-500">Coffee Bliss</span>. All rights reserved.
      </p>

      <!-- Social Media Links -->
      <div class="flex justify-center space-x-6">
        <a
          href="https://facebook.com"
          class="text-white hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
          target="_blank"
          aria-label="Facebook"
        >
          <i class="fab fa-facebook-f text-2xl"></i>
        </a>
        <a
          href="https://twitter.com"
          class="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          target="_blank"
          aria-label="Twitter"
        >
          <i class="fab fa-twitter text-2xl"></i>
        </a>
        <a
          href="https://instagram.com"
          class="text-white hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
          target="_blank"
          aria-label="Instagram"
        >
          <i class="fab fa-instagram text-2xl"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';

/* Footer Styling */
footer {
  background: linear-gradient(90deg, #111827, #1f2937, #111827);
  padding-top: 3rem;
  padding-bottom: 3rem;
}

/* Logo Styling */
img {
  border: 3px solid #374151;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

img:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
}

/* Social Media Icons */
a i {
  color: #9ca3af;
  transition: color 0.3s ease, transform 0.3s ease;
}

a:hover i {
  color: #ffffff;
  transform: scale(1.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .mb-6 {
    margin-bottom: 2rem;
  }

  .space-x-6 {
    justify-content: center;
  }
}
</style>
