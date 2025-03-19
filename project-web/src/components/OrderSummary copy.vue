<template>
  <div class="bg-gray-100 p-6 text-center min-h-screen flex items-center justify-center">
    <div id="app" class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Order Summary</h2>

      <div class="space-y-4">
        <div class="flex justify-between items-center border-b pb-2">
          <img :src="product.image" alt="Product" class="w-16 h-16 object-cover rounded mr-4">
          <span class="font-medium">{{ product.name }}</span>
          <span class="text-gray-600">${{ product.price }}</span>
          
          <div class="flex items-center">
            <button @click="increaseQuantity" class="bg-teal-500 text-white px-2 py-1 rounded-full">+</button>
            <input type="number" v-model="quantity" min="1" class="w-16 p-2 border rounded text-center mx-2" />
            <button @click="decreaseQuantity" class="bg-teal-500 text-white px-2 py-1 rounded-full">-</button>
          </div>

          <!-- Delete Icon -->
          <button @click="deleteProduct" class="text-red-500 hover:text-red-700 text-xl ml-4">
            <i class="fas fa-times-circle"></i> <!-- Font Awesome delete icon -->
          </button>
        </div>
      </div>

      <h3 class="mt-6 text-lg font-semibold text-center">Total Price: <span class="text-xl font-bold text-gray-900">${{ totalPrice }}</span></h3>

      <div class="mt-6 space-y-4">
        <div>
          <label class="block text-lg font-semibold text-gray-700">Sugar Percentage</label>
          <select v-model="sugarPercentage" class="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-200">
            <option value="0%">0% (No Sugar)</option>
            <option value="25%">25%</option>
            <option value="50%">50%</option>
            <option value="75%">75%</option>
            <option value="100%">100% (Full Sugar)</option>
          </select>
        </div>

        <input type="number" v-model="order.phoneNumber" placeholder="Phone Number" class="w-full p-2 border rounded" required>
        <textarea v-model="order.message" placeholder="Message/Suggestions" class="w-full p-2 border rounded"></textarea>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button @click="addProduct" class="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">Add Product</button>
          <button @click="clearForm" class="bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg">Clear</button>
          <button @click="submitOrder" class="bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg col-span-1 md:col-span-2">Submit Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Retrieve product details from query params
const product = {
  name: route.query.name,
  price: parseFloat(route.query.price),
  image: route.query.image
};

const quantity = ref(1);
const sugarPercentage = ref('50%');
const order = ref({
  phoneNumber: '',
  message: ''
});

// Calculate total price based on quantity
const totalPrice = computed(() => (quantity.value * product.price).toFixed(2));

// Increase quantity
const increaseQuantity = () => {
  quantity.value += 1;
};

// Decrease quantity
const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
  }
};

// Reset form to initial values
const clearForm = () => {
  quantity.value = 1;
  sugarPercentage.value = '50%';
  order.value.phoneNumber = '';
  order.value.message = '';
};

// Add Product function (you can modify this logic as per your requirements)
const addProduct = () => {
  // In a real app, you would push the item to a cart or similar
  alert(`Added ${product.name} to your cart!`);
};

// Submit Order function
const submitOrder = () => {
  if (!order.value.phoneNumber) {
    alert('Please provide your phone number!');
    return;
  }

  alert(`Order Submitted! Product: ${product.name} \nQuantity: ${quantity.value} \nTotal Price: $${totalPrice.value}`);
};

// Delete Product function (to remove product from the order)
const deleteProduct = () => {
  if (confirm("Are you sure you want to delete this product?")) {
    alert("Product removed from your order.");
    // Logic to remove the product from the cart or order list
  }
};
</script>
