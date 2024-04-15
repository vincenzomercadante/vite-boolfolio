import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppDetails from "./pages/AppDetails.vue";

const routes = [
  {
    path: "/",
    component: AppHome,
    name: "home",
  },
  {
    path: "/projects",
    component: AppProjects,
    name: "project",
  },
  {
    path: "/projects/:id",
    component: AppDetails,
    name: "project-detail",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
