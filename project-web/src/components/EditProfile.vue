<template>
  <div>
    <header class="bg-teal-600 text-white py-4 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <router-link to="/profile" class="text-white font-semibold hover:underline">
          <i class="fas fa-arrow-left"></i> Back
        </router-link>
        <h1 class="text-2xl font-bold">Edit Profile</h1>
      </div>
    </header>
    <div class="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center mb-6">
        <label for="profilePicture" class="cursor-pointer">
          <img :src="user.profilePicture" alt="Profile Picture" class="w-32 h-32 rounded-full border-4 border-teal-600 hover:scale-110 transform transition-all duration-200">
          <input type="file" id="profilePicture" @change="updateProfilePicture" class="hidden">
        </label>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-1">Name</label>
        <input v-model="user.name" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" :class="{'border-red-500': errors.name}">
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-1">Email</label>
        <input v-model="user.email" type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" :class="{'border-red-500': errors.email}">
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-medium mb-1">Username</label>
        <input v-model="user.username" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" :class="{'border-red-500': errors.username}">
        <p v-if="errors.username" class="text-red-500 text-sm">{{ errors.username }}</p>
      </div>
      <button
        @click="saveProfile"
        class="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500 transform transition-all duration-300"
      >
        Save Changes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')) || {
        name: '',
        email: '',
        username: '',
        profilePicture: ''
      },
      errors: {
        name: '',
        email: '',
        username: ''
      }
    };
  },
  methods: {
    updateProfilePicture(event) {
      const file = event.target.files[0];
      if (file) {
        this.user.profilePicture = URL.createObjectURL(file);
      }
    },
    saveProfile() {
      this.errors = { name: '', email: '', username: '' }; // Reset errors

      // Validate the form
      let valid = true;
      if (!this.user.name) {
        this.errors.name = 'Name is required.';
        valid = false;
      }
      if (!this.user.email || !/\S+@\S+\.\S+/.test(this.user.email)) {
        this.errors.email = 'Valid email is required.';
        valid = false;
      }
      if (!this.user.username) {
        this.errors.username = 'Username is required.';
        valid = false;
      }

      // If valid, save profile
      if (valid) {
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log('Profile saved:', this.user);
        this.$router.push({ path: '/profile' });
      }
    }
  }
};
</script>

<style scoped>
.hover\:scale-110:hover {
  transform: scale(1.1);
}

/* Additional styles for error messages */
input:invalid {
  border-color: red;
}
</style>
