<template>
  <section>
    <!-- Contact Page Title -->
    <div class="contact-header text-center py-24 bg-gradient-to-r from-teal-700 to-teal-500 text-white shadow-md">
      <h1 class="text-5xl font-extrabold">Contact Us</h1>
      <p class="text-lg mt-4 text-gray-200">We’d love to hear from you! Get in touch with us for any inquiries or feedback.</p>
    </div>

    <!-- Contact Information -->
    <div class="contact-info py-16 bg-gray-100">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-8">Reach Out to Us</h2>
        <p class="text-lg text-gray-600 mb-12">Whether you have questions, feedback, or just want to say hello, we're here to help!</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Phone -->
          <div class="contact-method p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <h3 class="text-2xl font-semibold text-teal-600 mb-4">Phone</h3>
            <p class="text-lg text-gray-700">Call us at (123) 456-7890</p>
          </div>

          <!-- Email -->
          <div class="contact-method p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <h3 class="text-2xl font-semibold text-teal-600 mb-4">Email</h3>
            <p class="text-lg text-gray-700">
              Send us an email at 
              <a href="mailto:coffeebliss6969@gmail.com" class="text-teal-600 hover:text-teal-500 underline">coffeebliss6969@gmail.com</a>
            </p>
          </div>

          <!-- Address -->
          <div class="contact-method p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <h3 class="text-2xl font-semibold text-teal-600 mb-4">Address</h3>
            <p class="text-lg text-gray-700">Visit us at 123 Coffee St, Brew City, CA</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="contact-form py-16 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-gray-800 text-center mb-12">Send Us a Message</h2>
        <form action="#" method="POST" class="max-w-2xl mx-auto bg-gray-50 shadow-xl rounded-lg p-10">
          <div class="grid grid-cols-1 gap-8">
            <div>
              <label for="name" class="block text-lg font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" required class="w-full p-4 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your Name">
            </div>

            <div>
              <label for="email" class="block text-lg font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" required class="w-full p-4 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your Email">
            </div>

            <div>
              <label for="message" class="block text-lg font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" required rows="5" class="w-full p-4 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your Message"></textarea>
            </div>

            <div>
              <button type="submit" class="w-full py-4 bg-teal-600 text-white font-semibold text-lg rounded-lg hover:bg-teal-700 transition duration-300">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Map Section -->
    <!-- <div class="map py-16 bg-gray-50">
  <div class="container mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold text-gray-800 mb-8">Find Us Here</h2>
    <div class="max-w-4xl mx-auto">
      <iframe 
        src="https://www.google.com/maps/place/Peace+Bird+Statue/@13.0774421,103.2355352,15z/data=!4m6!3m5!1s0x310549310d596cbb:0x787c2d7a12ec2e02!8m2!3d13.084932!4d103.2256578!16s%2Fg%2F11trs4n55j?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D" 
        class="w-full h-96 rounded-lg shadow-lg border-0" 
        allowfullscreen="" 
        loading="lazy">
      </iframe>
    </div>
  </div>
</div> -->
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Hover and shadow styles for cards */
.contact-method {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-method:hover {
  transform: scale(1.05);
  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.2);
}

/* Button styling */
.contact-form button {
  background-color: #319795;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #2c7a7b;
}

/* Form input and textarea focus styles */
.contact-form input:focus, 
.contact-form textarea:focus {
  border-color: #319795;
  box-shadow: 0 0 5px rgba(49, 151, 149, 0.5);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-info h2,
  .contact-form h2 {
    font-size: 2.5rem;
  }
  .contact-method {
    margin-bottom: 1.5rem;
  }
}
</style>
