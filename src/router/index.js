import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Dashboard from "../views/Dashboard.vue";

// Remove or comment out Login, Signup, Profile, Subscription
// import Login from "../views/Login.vue";
// import Signup from "../views/Signup.vue";
// import Profile from "../views/Profile.vue";
// import Subscription from "../views/Subscription.vue";

const routes = [
  { path: "/", name: "Landing", component: LandingPage },
  // { path: "/login", name: "Login", component: Login },
  // { path: "/signup", name: "Signup", component: Signup },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
