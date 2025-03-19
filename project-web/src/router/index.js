import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import MenuView from '@/views/MenuView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactUsView from '@/views/ContactUsView.vue';
import ProfileUserView from '@/views/ProfileUserView.vue';
import LoginFormView from '@/views/LoginFormView.vue';
import RegisterFormView from '@/views/RegisterFormView.vue';
import OrderSummaryView from '@/views/OrderSummaryView.vue';
import EditProfileView from '@/views/EditProfileView.vue';

// Define the routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUsView
  },
  {
    path: '/profile',
    name: 'profileUser',
    component: ProfileUserView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginFormView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterFormView
  },
  {
    path: '/order',
    name: 'order',
    component: OrderSummaryView,
    props: route => ({ product: route.query }) // This works for passing query params to the component
  },
  {
    path: '/editprofile',
    name: 'editprofile',
    component: EditProfileView
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Add the navigation guard to check for authentication before allowing access to certain pages
router.beforeEach((to, from, next) => {
  if (to.name === 'dashboard' || to.name === 'profileUser' || to.name === 'editprofile') {
    // Example: Check for user authentication
    if (!localStorage.getItem('auth_token')) {
      next('/login'); // Redirect to login if not authenticated
    } else {
      next();
    }
  } else {
    next(); // Always call next() to allow navigation
  }
});

export default router;
