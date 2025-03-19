<template>
  <section class="bg-gradient-to-r from-teal-600 via-indigo-700 to-purple-800 text-white py-24 px-8">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <!-- Text Content -->
      <div class="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
        <h1 class="text-6xl font-extrabold leading-snug text-amber-500 drop-shadow-xl transform transition-all duration-500 hover:scale-105 hover:text-amber-300">
          Your Next Big Favorite!
        </h1>
        <p class="mt-6 text-lg text-gray-200 max-w-lg mx-auto md:mx-0">
          Dive into the ultimate experience with innovative design and quality crafted just for you.
        </p>
        <button 
          class="mt-8 px-10 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          Learn More
        </button>
      </div>
      
      <!-- Image Section -->
      <div class="md:w-1/2 mt-10 md:mt-0">
        <img 
          src="@/assets/CoverImage.jpg" 
          alt="Product Photo" 
          class="w-full h-auto rounded-3xl shadow-xl transform hover:scale-105 hover:rotate-2 transition duration-500 ease-in-out"
        >
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Gradient Background with darker tones */
section {
  background: linear-gradient(90deg, #2d3748, #4a5568, #6b46c1); /* More sophisticated gradient */
  padding: 6rem 2rem; /* Increased padding for a spacious design */
}

/* Heading with Hover Effect */
h1 {
  text-shadow: 4px 4px 15px rgba(0, 0, 0, 0.6); /* Stronger text shadow for more contrast */
  color: #fbbf24; /* Amber */
  transition: transform 0.3s ease, color 0.3s ease;
}

h1:hover {
  color: #fcd34d; /* Light amber color on hover */
  transform: scale(1.05);
}

/* Paragraph Styling */
p {
  color: #e5e7eb; /* Light gray */
  max-width: 36rem;
  margin: 0 auto;
  line-height: 1.8; /* Improved line height */
}

/* Button Styling */
button {
  background-color: #38b2ac; /* Teal */
  padding: 1.25rem 3rem; /* Adjusted padding for a better fit */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  border-radius: 9999px; /* Fully rounded button */
}

button:hover {
  background-color: #319795; /* Darker teal on hover */
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  color: #fff;
}

/* Image Section Styling */
img {
  border-radius: 1.875rem; /* Rounded corners */
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4); /* More intense shadow */
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

img:hover {
  transform: scale(1.05) rotate(2deg); /* Slight rotation with scaling */
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5); /* Deeper shadow on hover */
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 1.1rem;
  }

  /* Adjusting button padding for mobile */
  button {
    padding: 1.5rem 3rem;
  }
  
  .container {
    padding: 2rem 0;
  }
}
</style>
