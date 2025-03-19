<template>
  <div class="max-w-7xl mx-auto mt-10 mb-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Order History</h2>
    <div v-if="orders.length" class="relative">
      <div class="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-transparent"></div>
      <div class="h-96 overflow-y-auto space-y-4">
        <div v-for="order in orders" :key="order.id" class="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="flex justify-between items-center mb-4">
            <div>
              <h3 class="text-xl font-semibold text-gray-700">Order #{{ order.id }}</h3>
              <p class="text-sm text-gray-500">Placed on {{ order.date }}</p>
            </div>
            <div>
              <span :class="statusClass(order.status)" class="px-3 py-1 rounded-full text-sm font-semibold">
                {{ order.status }}
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <p class="text-gray-700"><strong>Total:</strong> ${{ order.total }}</p>
            </div>
            <div>
              <button @click="viewOrder(order.id)" class="text-teal-600 hover:underline">View Details</button>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent"></div>
    </div>
    <div v-else class="text-center text-gray-500">
      <p>No orders found.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: '12345',
          date: '2023-10-01',
          status: 'Shipped',
          total: '150.00'
        },
        {
          id: '12346',
          date: '2023-09-15',
          status: 'Delivered',
          total: '200.00'
        },
        {
          id: '12347',
          date: '2023-08-30',
          status: 'Processing',
          total: '75.00'
        },
        {
          id: '12345',
          date: '2023-10-01',
          status: 'Shipped',
          total: '150.00'
        },
        {
          id: '12346',
          date: '2023-09-15',
          status: 'Delivered',
          total: '200.00'
        },
        {
          id: '12347',
          date: '2023-08-30',
          status: 'Processing',
          total: '75.00'
        },
        // Add more orders as needed for testing
      ]
    };
  },
  methods: {
    statusClass(status) {
      switch (status) {
        case 'Shipped':
          return 'bg-blue-100 text-blue-800';
        case 'Delivered':
          return 'bg-green-100 text-green-800';
        case 'Processing':
          return 'bg-yellow-100 text-yellow-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    },
    viewOrder(orderId) {
      // Handle viewing order details
      console.log('View order details for order ID:', orderId);
      // You can navigate to an order details page or show a modal with order details
    }
  }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>