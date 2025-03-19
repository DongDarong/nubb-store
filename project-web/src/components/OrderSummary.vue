<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-6">
      <div v-if="isAuthenticated" class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4 text-center">Order Summary</h2>

        <!-- Display Cart Items -->
        <div v-if="cart.length > 0" class="space-y-4">
          <div v-for="(item, index) in cart" :key="index" class="flex justify-between items-center border-b pb-2">
            <img :src="item.image" alt="Product" class="w-16 h-16 object-cover rounded mr-4">
            <span class="font-medium">{{ item.name }}</span>
            <span class="text-gray-600">${{ item.price }}</span>

            <!-- Quantity Controls -->
            <div class="flex items-center">
              <button @click="increaseQuantity(index)" class="bg-teal-500 text-white px-2 py-1 rounded-full">+</button>
              <input type="number" v-model="item.quantity" min="1" class="w-16 p-2 border rounded text-center mx-2" />
              <button @click="decreaseQuantity(index)" class="bg-teal-500 text-white px-2 py-1 rounded-full">-</button>
            </div>

            <!-- Sugar Percentage -->
            <div class="flex items-center">
              <label class="mr-2 text-sm text-gray-600">Sugar:</label>
              <select v-model="item.sugarPercentage" class="w-24 p-2 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-200">
                <option value="0%">0% (No Sugar)</option>
                <option value="25%">25%</option>
                <option value="50%">50%</option>
                <option value="75%">75%</option>
                <option value="100%">100% (Full Sugar)</option>
              </select>
            </div>

            <!-- Cup Size Selection -->
            <div class="flex items-center ml-4">
              <label class="mr-2 text-sm text-gray-600">Size:</label>
              <select v-model="item.size" class="w-24 p-2 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-200">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>

            <!-- Delete Icon -->
            <button @click="deleteProduct(index)" class="text-red-500 hover:text-red-700 text-xl ml-4">
              <i class="fas fa-times-circle"></i>
            </button>
          </div>
        </div>

        <!-- Show a message if no items are in the cart -->
        <p v-else class="text-center text-gray-500">No items in your order yet.</p>

        <!-- Total Price -->
        <h3 class="mt-6 text-lg font-semibold text-center">Total Price: <span class="text-xl font-bold text-gray-900">${{ totalPrice }}</span></h3>

        <!-- Order Details and Buttons -->
        <div class="mt-6 space-y-4">
          <!-- Phone Number Input -->
          <div>
            <label class="block text-lg font-semibold text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              v-model="order.phoneNumber" 
              placeholder="Enter your phone number"
              class="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-200"
              required
            />
          </div>

          <div>
            <label class="block text-lg font-semibold text-gray-700">Message/Suggestions</label>
            <textarea v-model="order.message" placeholder="Message/Suggestions" class="w-full p-2 border rounded"></textarea>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Clear Form Button -->
            <button @click="clearForm" class="bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg">Clear</button>
            <!-- Submit Order Button -->
            <button @click="submitOrder" class="bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg col-span-1 md:col-span-2">Submit Order</button>
          </div>
        </div>
      </div>

      <!-- If user is not authenticated, show login/register message -->
      <div v-else class="text-center text-gray-500">
        <p>You must <router-link to="/login" class="text-teal-600 hover:underline">log in</router-link> or <router-link to="/register" class="text-teal-600 hover:underline">register</router-link> to place an order.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Fetch cart from localStorage or initialize as an empty array
const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);

// Update localStorage whenever cart changes
watch(cart, (newCart) => {
  localStorage.setItem('cart', JSON.stringify(newCart));
}, { deep: true });

// Initialize order details
const order = ref({
  phoneNumber: '',
  message: ''
});

// Authentication status check (assuming a simple check for a logged-in user)
const isAuthenticated = computed(() => {
  return localStorage.getItem('auth_token') !== null;  // Example check for auth_token in localStorage
});

// Calculate total price
const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
});

// Increase quantity of an item
const increaseQuantity = (index) => {
  cart.value[index].quantity += 1;
};

// Decrease quantity of an item
const decreaseQuantity = (index) => {
  if (cart.value[index].quantity > 1) {
    cart.value[index].quantity -= 1;
  }
};

// Delete product from the cart
const deleteProduct = (index) => {
  if (confirm("Are you sure you want to remove this item?")) {
    cart.value.splice(index, 1);
  }
};

// Clear the form
const clearForm = () => {
  order.value.phoneNumber = '';
  order.value.message = '';
};

// Submit the order
const submitOrder = () => {
  if (cart.value.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Here, you can integrate your order submission logic (API call, etc.)
  alert(`Order submitted! Total Price: $${totalPrice.value}`);
  localStorage.removeItem('cart');
  cart.value = [];
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
