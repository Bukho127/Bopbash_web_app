import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Dashboard from '../views/Dashboard.vue';
import Profile from '../views/Profile.vue';
import Subscription from '../views/Subscription.vue';

const isAuthenticated = () => !!localStorage.getItem('auth');

const routes = [
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
 
  },
  {
    path: '/subscription',
    name: 'Subscription',
    component: Subscription,
    beforeEnter: (to, from, next) => isAuthenticated() ? next() : next('/login')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
