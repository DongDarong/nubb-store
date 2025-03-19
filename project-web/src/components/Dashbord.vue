<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="w-64 bg-gray-800 text-white">
      <div class="flex justify-center py-8">
        <img src="@/assets/logo-Bliss.webp" alt="Logo" class="w-20">
      </div>
      <nav>
        <ul>
          <li><a href="#" class="block py-3 px-4 text-lg font-semibold hover:bg-teal-600 hover:text-white">Dashboard</a></li>
          <li><a href="#" class="block py-3 px-4 text-lg font-semibold hover:bg-teal-600 hover:text-white">Orders</a></li>
          <li><a href="#" class="block py-3 px-4 text-lg font-semibold hover:bg-teal-600 hover:text-white">Products</a></li>
          <li><a href="#" class="block py-3 px-4 text-lg font-semibold hover:bg-teal-600 hover:text-white">Customers</a></li>
          <li><a href="#" class="block py-3 px-4 text-lg font-semibold hover:bg-teal-600 hover:text-white">Settings</a></li>
        </ul>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 bg-gray-100 p-8">
      <!-- Header -->
      <header class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-semibold text-gray-800">Welcome to Your Dashboard</h1>
          <p class="text-lg text-gray-600">Here’s an overview of your business performance.</p>
        </div>
        <div class="flex items-center">
          <img src="@/assets/Boy.png" alt="Profile" class="w-10 h-10 rounded-full mr-3">
          <span class="font-semibold text-teal-600">John Doe</span>
        </div>
      </header>

      <!-- Dashboard Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
          <h3 class="text-2xl font-semibold text-gray-800">Orders</h3>
          <p class="text-4xl font-bold text-teal-600">150</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
          <h3 class="text-2xl font-semibold text-gray-800">Revenue</h3>
          <p class="text-4xl font-bold text-teal-600">$2,500</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
          <h3 class="text-2xl font-semibold text-gray-800">Customers</h3>
          <p class="text-4xl font-bold text-teal-600">300</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
          <h3 class="text-2xl font-semibold text-gray-800">Products</h3>
          <p class="text-4xl font-bold text-teal-600">50</p>
        </div>
      </div>

      <!-- Stats Graph -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Performance Overview</h2>
        <canvas id="performanceChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

onMounted(() => {
  const ctx = document.getElementById('performanceChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Revenue',
        data: [1200, 1300, 1500, 1700, 1800],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
  });
});
</script>

<style scoped>
/* Hover and shadow effects for cards */
.card {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

/* Responsive adjustments for small screens */
@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  .header p {
    font-size: 1rem;
  }
  .dashboard-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
