<template>
  <section>
    <div class="menu-header text-center py-16 bg-teal-500 text-white">
      <h1 class="text-5xl font-extrabold">Our Menu</h1>
      <p class="text-lg mt-4">Delicious options to satisfy your cravings!</p>
    </div>

    <div class="menu-items bg-gray-50 py-16">
      <div class="container mx-auto px-6">
        <div v-for="category in categories" :key="category.id">
          <h3 class="text-3xl font-bold text-teal-500 mb-6 text-center mt-6">{{ category.name }} Items</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="item in category.items" 
              :key="item.id" 
              class="item-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300"
            >
              <img 
                :src="item.image" 
                :alt="item.name" 
                class="w-full h-48 object-cover rounded-lg mb-4"
              >
              <h4 class="text-2xl font-semibold text-teal-500 mb-4">{{ item.name }}</h4>
              <p class="text-gray-600 text-lg">{{ item.description }}</p>
              <span class="text-xl font-bold text-gray-800">$ {{ item.price }}</span>
              <button 
                class="mt-4 bg-teal-500 text-white py-2 px-6 rounded-full w-full"
                @click="addToCart(item)"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();


const categories = ref([
{
  id: 1,
  name: 'Coffee',
  description: 'Espresso, lattes, cappuccinos, and more.',
  showItems: false,
  items: [
    { 
      id: 1, 
      name: 'Espresso', 
      description: 'Strong black coffee.', 
      price: 2.50,
      image: '../assets/Coffee/Espresso.jpg' 
    },
    { 
      id: 2, 
      name: 'Latte', 
      description: 'Espresso with steamed milk.', 
      price: 3.50,
      image: '../assets/Coffee/Latte.jpg' 
    },
    { 
      id: 3, 
      name: 'Cappuccino', 
      description: 'Espresso with frothed milk.', 
      price: 3.75,
      image: '../assets/Coffee/Cappuccino.webp' 
    },
    { 
      id: 4, 
      name: 'Americano', 
      description: 'Espresso diluted with hot water.', 
      price: 2.75,
      image: '../assets/Coffee/Americano.jpeg' 
    },
    { 
      id: 5, 
      name: 'Flat White', 
      description: 'Espresso with velvety steamed milk.', 
      price: 3.50,
      image: '../assets/Coffee/Flat-White.webp' 
    },
    { 
      id: 6, 
      name: 'Macchiato', 
      description: 'Espresso with a dollop of frothy milk.', 
      price: 3.00,
      image: '../assets/Coffee/Macchiato.jpg' 
    },
    { 
      id: 7, 
      name: 'Mocha', 
      description: 'Espresso with chocolate and steamed milk.', 
      price: 4.00,
      image: '../assets/Coffee/Mocha.jpg' 
    },
    { 
      id: 8, 
      name: 'Ristretto', 
      description: 'Short shot of concentrated espresso.', 
      price: 2.75,
      image: '../assets/Coffee/Ristretto.webp' 
    },
    { 
      id: 9, 
      name: 'Cortado', 
      description: 'Espresso with equal parts steamed milk.', 
      price: 3.25,
      image: '../assets/Coffee/Cortado.webp' 
    },
    { 
      id: 10, 
      name: 'Affogato', 
      description: 'Espresso poured over a scoop of ice cream.', 
      price: 4.50,
      image: '../assets/Coffee/Affogato.jpg' 
    },
    { 
      id: 11, 
      name: 'Irish Coffee', 
      description: 'Espresso with whiskey and cream.', 
      price: 5.00,
      image: '../assets/Coffee/Irish-Coffee.jpg' 
    },
    { 
      id: 12, 
      name: 'Turkish Coffee', 
      description: 'Unfiltered coffee with a rich flavor.', 
      price: 3.00,
      image: '../assets/Coffee/Turkish-Coffee.jpg' 
    },
    { 
      id: 13, 
      name: 'Doppio', 
      description: 'Double shot of espresso.', 
      price: 3.25,
      image: '../assets/Coffee/Doppio.webp' 
    },
    { 
      id: 14, 
      name: 'Long Black', 
      description: 'Hot water topped with espresso.', 
      price: 3.00,
      image: '../assets/Coffee/Long-Black.webp' 
    },
    { 
      id: 15, 
      name: 'Vienna Coffee', 
      description: 'Espresso topped with whipped cream.', 
      price: 4.00,
      image: '../assets/Coffee/Vienna-Coffee.jpg' 
    },
    { 
      id: 16, 
      name: 'Iced Coffee', 
      description: 'Chilled coffee served over ice.', 
      price: 3.25,
      image: '../assets/Coffee/Iced-Coffee.jpg' 
    },
    { 
      id: 17, 
      name: 'Caramel Macchiato', 
      description: 'Espresso with caramel and steamed milk.', 
      price: 4.25,
      image: '../assets/Coffee/Caramel-Macchiato.jpg' 
    },
    { 
      id: 18, 
      name: 'Cold Brew Coffee', 
      description: 'Coffee brewed cold for a smooth taste.', 
      price: 3.75,
      image: '../assets/Coffee/Cold-Brew-Coffee.webp' 
    },
    { 
      id: 19, 
      name: 'Espresso Con Panna', 
      description: 'Espresso topped with whipped cream.', 
      price: 3.00,
      image: '../assets/Coffee/Espresso-Con-Panna.webp' 
    },
    { 
      id: 20, 
      name: 'Red Eye', 
      description: 'Coffee with a shot of espresso.', 
      price: 3.50,
      image: '../assets/Coffee/Red-Eye.jpg' 
    }
  ]
}
,
  {
  id: 2,
  name: 'Pastries',
  description: 'Freshly baked goods.',
  showItems: false,
  items: [
    { 
      id: 1, 
      name: 'Croissant', 
      description: 'Flaky and buttery pastry.', 
      price: 2.00,
      image: '../assets/Pastries/Croissant.jpg' 
    },
    { 
      id: 2, 
      name: 'Muffin', 
      description: 'Freshly baked with chocolate chips.', 
      price: 2.50,
      image: '../assets/Pastries/Muffin.jpg' 
    },
    { 
      id: 3, 
      name: 'Scone', 
      description: 'A delicious treat for tea time.', 
      price: 3.00,
      image: '../assets/Pastries/Scone.png' 
    },
    { 
      id: 4, 
      name: 'Danish', 
      description: 'Sweet and buttery pastry with a fruit filling.',
      price: 3.50,
      image: '../assets/Pastries/Danish.jpg' 
    },
    { 
      id: 5, 
      name: 'Eclair', 
      description: 'Choux pastry filled with cream and topped with chocolate.',
      price: 3.75,
      image: '../assets/Pastries/Eclair.jpg' 
    },
    { 
      id: 6, 
      name: 'Tiramisu', 
      description: 'Layered dessert with coffee-soaked biscuits and mascarpone cream.',
      price: 4.00,
      image: '../assets/Pastries/Tiramisu.jpg' 
    },
    { 
      id: 7, 
      name: 'Macaron', 
      description: 'Delicate almond-based cookies with buttercream filling.',
      price: 2.00,
      image: '../assets/Pastries/Macaron.jpg' 
    },
    { 
      id: 8, 
      name: 'Cannoli', 
      description: 'Crispy pastry tubes filled with sweet ricotta cheese.',
      price: 2.75,
      image: '../assets/Pastries/Cannoli.jpg' 
    },
    { 
      id: 9, 
      name: 'Strudel', 
      description: 'Flaky pastry filled with apples, cinnamon, and sugar.',
      price: 3.25,
      image: '../assets/Pastries/Strudel.jpg' 
    },
    { 
      id: 10, 
      name: 'Churros', 
      description: 'Deep-fried dough sticks dusted with sugar and cinnamon.',
      price: 2.50,
      image: '../assets/Pastries/Churros.webp' 
    },
    { 
      id: 11, 
      name: 'Baklava', 
      description: 'Layers of filo pastry filled with nuts and honey syrup.',
      price: 3.00,
      image: '../assets/Pastries/Baklava.jpg' 
    },
    { 
      id: 12, 
      name: 'Puff Pastry', 
      description: 'Flaky, buttery pastry often used for savory or sweet treats.',
      price: 2.25,
      image: '../assets/Pastries/Puff-Pastry.webp' 
    },
    { 
      id: 13, 
      name: 'Turnover', 
      description: 'Pastry filled with fruit or sweet filling, folded into a triangle.',
      price: 2.75,
      image: '../assets/Pastries/Turnover.jpg' 
    },
    { 
      id: 14, 
      name: 'Profiterole', 
      description: 'Choux pastry filled with cream and topped with chocolate.',
      price: 3.00,
      image: '../assets/Pastries/Profiterole.jpg' 
    },
    { 
      id: 15, 
      name: 'Galette', 
      description: 'Rustic pastry with fruit or savory filling.',
      price: 3.50,
      image: '../assets/Pastries/Galette.jpeg' 
    },
    { 
      id: 16, 
      name: 'Opera Cake', 
      description: 'Elegant layered cake with coffee, chocolate, and almond flavors.',
      price: 4.50,
      image: '../assets/Pastries/Opera-Cake.webp' 
    },
    { 
      id: 17, 
      name: 'Clafoutis', 
      description: 'A baked French dessert made with fruit and a flan-like batter.',
      price: 3.25,
      image: '../assets/Pastries/Clafoutis.jpg' 
    },
    { 
      id: 18, 
      name: 'Madeleines', 
      description: 'Small, shell-shaped sponge cakes, often flavored with lemon.',
      price: 2.50,
      image: '../assets/Pastries/Madeleines.jpg' 
    },
    { 
      id: 19, 
      name: 'Palmier', 
      description: 'Crispy, sugary pastry shaped like a palm leaf.',
      price: 2.00,
      image: '../assets/Pastries/Palmier.jpg' 
    },
    { 
      id: 20, 
      name: 'Brioche', 
      description: 'Soft, sweet French bread often used for pastries.',
      price: 3.00,
      image: '../assets/Pastries/Brioche.jpg' 
    }
  ]
},

{
  id: 3,
  name: 'Cold Beverages',
  description: 'Refreshing iced drinks.',
  showItems: false,
  items: [
    { 
      id: 1, 
      name: 'Iced Coffee', 
      description: 'Chilled coffee served with ice.', 
      price: 3.00,
      image: '../assets/Cold-Beverages/Iced-Coffee.jpg' 
    },
    { 
      id: 2, 
      name: 'Iced Latte', 
      description: 'Cold espresso with milk and ice.', 
      price: 3.75,
      image: '../assets/Cold-Beverages/Iced-Latte.jpeg' 
    },
    { 
      id: 3, 
      name: 'Iced Matcha Latte', 
      description: 'Chilled matcha with milk and ice.', 
      price: 4.00,
      image: '../assets/Cold-Beverages/Iced-Matcha-Latte.jpg'  
    },
    { 
      id: 4, 
      name: 'Iced Mocha', 
      description: 'Espresso with chocolate and milk, served cold.', 
      price: 4.25,
      image: '../assets/Cold-Beverages/Iced-Mocha.jpg' 
    },
    { 
      id: 5, 
      name: 'Iced Americano', 
      description: 'Espresso diluted with cold water and ice.', 
      price: 3.50,
      image: '../assets/Cold-Beverages/Iced-Americano.jpg' 
    },
    { 
      id: 6, 
      name: 'Iced Cappuccino', 
      description: 'Espresso with cold frothed milk and ice.', 
      price: 3.75,
      image: '../assets/Cold-Beverages/Iced-Cappuccino.webp' 
    },
    { 
      id: 7, 
      name: 'Cold Brew', 
      description: 'Coffee brewed cold and served with ice.', 
      price: 3.50,
      image: '../assets/Cold-Beverages/Cold-Brew.jpg' 
    },
    { 
      id: 8, 
      name: 'Iced Caramel Macchiato', 
      description: 'Espresso with caramel syrup and cold milk.', 
      price: 4.50,
      image: '../assets/Cold-Beverages/Iced-Caramel-Macchiato.jpg' 
    },
    { 
      id: 9, 
      name: 'Iced Chai Latte', 
      description: 'Spiced chai tea with cold milk and ice.', 
      price: 3.75,
      image: '../assets/Cold-Beverages/Iced-Chai-Latte.jpg' 
    },
    { 
      id: 10, 
      name: 'Iced Tea', 
      description: 'Refreshing chilled tea served over ice.', 
      price: 2.50,
      image: '../assets/Cold-Beverages/Iced-Tea.png' 
    },
    { 
      id: 11, 
      name: 'Lemonade', 
      description: 'Freshly squeezed lemonade served cold.', 
      price: 2.75,
      image: '../assets/Cold-Beverages/Lemonade.webp' 
    },
    { 
      id: 12, 
      name: 'Iced Matcha', 
      description: 'Cold matcha served with ice and a touch of sweetness.', 
      price: 4.00,
      image: '../assets/Cold-Beverages/Iced-Matcha.webp' 
    },
    { 
      id: 13, 
      name: 'Frozen Coffee', 
      description: 'Blended coffee with ice for a frozen treat.', 
      price: 4.00,
      image: '../assets/Cold-Beverages/Frozen-Coffee.jpg' 
    },
    { 
      id: 14, 
      name: 'Iced Coconut Latte', 
      description: 'Espresso with coconut milk and ice.', 
      price: 4.25,
      image: '../assets/Cold-Beverages/Iced-Coconut-Latte.webp' 
    },
    { 
      id: 15, 
      name: 'Iced Frappe', 
      description: 'Blended coffee or chocolate drink served with ice.', 
      price: 3.50,
      image: '../assets/Cold-Beverages/Iced-Frappe.jpg' 
    },
    { 
      id: 16, 
      name: 'Iced White Chocolate Mocha', 
      description: 'White chocolate syrup with espresso and cold milk.', 
      price: 4.50,
      image: '../assets/Cold-Beverages/Iced-White-Chocolate-Mocha.webp' 
    },
    { 
      id: 17, 
      name: 'Iced Green Tea Latte', 
      description: 'Chilled green tea with milk and ice.', 
      price: 4.00,
      image: '../assets/Cold-Beverages/Iced-Green-Tea-Latte.webp' 
    },
    { 
      id: 18, 
      name: 'Iced Hibiscus Tea', 
      description: 'Chilled hibiscus flower tea served with ice.', 
      price: 3.00,
      image: '../assets/Cold-Beverages/Iced-Hibiscus-Tea.jpg' 
    },
    { 
      id: 19, 
      name: 'Iced Strawberry Lemonade', 
      description: 'A refreshing combination of strawberry and lemonade served cold.',
      price: 3.50,
      image: '../assets/Cold-Beverages/Iced-Strawberry-Lemonade.webp' 
    },
    { 
      id: 20, 
      name: 'Iced Mango Tea', 
      description: 'A tropical blend of mango tea served cold.',
      price: 3.25,
      image: '../assets/Cold-Beverages/Iced-Mango-Tea.jpg' 
    }
  ]
},

]);
// Function to add item to cart and navigate to order page
const addToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if item already exists in cart
  const existingItem = cart.find(i => i.id === item.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  router.push('/order');
};
</script>

<style scoped>
/* Menu Header */
.menu-header {
  background-color: #38b2ac;
  color: white;
  padding: 3rem 1rem;
  text-align: center;
}

.menu-header h1 {
  font-size: 3.5rem;
}

.menu-header p {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

/* Menu Categories */
.menu-categories {
  background-color: #ffffff;
}

.category-card {
  background-color: #f1faf8;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

.category-card button {
  background-color: #38b2ac;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.category-card button:hover {
  background-color: #319795;
}

/* Menu Items */
.menu-items {
  background-color: #f9fafb;
}

.item-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.item-card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15);
}

.item-card img {
  max-height: 200px;
  object-fit: cover;
  border-radius: 0.75rem;
}

.item-card h4 {
  font-size: 1.75rem;
  color: #38b2ac;
  margin-bottom: 1rem;
}

.item-card p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.item-card span {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
}
</style>