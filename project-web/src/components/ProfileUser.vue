<template>
  <div>
    <header class="bg-teal-600 text-white py-4 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <nav>
          <router-link to="/" class="text-white font-semibold hover:underline">
            <i class="fas fa-arrow-left"></i> <!-- Font Awesome back icon -->
          </router-link>
        </nav>
        <h1 class="text-2xl font-bold">Profile</h1>
      </div>
    </header>
    <div class="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center mb-6">
        <img :src="user.profilePicture" alt="Profile Picture" class="w-32 h-32 rounded-full border-4 border-teal-600 hover:scale-110 transform transition-all duration-200">
      </div>
      <h2 class="text-3xl font-bold text-center text-teal-800 mb-4">{{ user.username }}</h2>
      <p class="text-xl text-gray-800 mb-3"><strong>Email:</strong> {{ user.email }}</p>
      
      <div class="flex flex-col gap-4">
        <router-link
          to="/editprofile"
          class="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transform transition-all duration-300 block text-center"
        >
          Edit Profile
        </router-link>

        <button
          @click="logout"
          class="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500 transform transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Retrieve the user data from localStorage or use default values if not found
      user: JSON.parse(localStorage.getItem('user')) || {
        username: '',
        email: '',
        profilePicture: './assets/default-profile.png' // Default profile picture
      }
    };
  },
  methods: {
    logout() {
      // Clear user data from localStorage
      localStorage.removeItem('user');
      // Redirect to login page
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';

body {
  background-color: #f7fafc;
  font-family: 'Poppins', sans-serif;
}

.max-w-md {
  max-width: 32rem;
}

.bg-white {
  background-color: #ffffff;
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.focus\:outline-none:focus {
  outline: none;
}

.focus\:ring-4:focus {
  box-shadow: 0 0 0 4px rgba(0, 128, 128, 0.5);
}

.focus\:ring-teal-500:focus {
  box-shadow: 0 0 0 4px rgba(0, 128, 128, 0.5);
}

.transition {
  transition: all 0.3s ease;
}

.duration-300 {
  transition-duration: 300ms;
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}
</style>