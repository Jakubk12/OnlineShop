import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./pages/HomeComponent.vue";
import CategoriesComponent from "./pages/CategoriesComponent.vue";
import ContactComponent from "./pages/ContactComponent.vue";

import AccesoriesComponent from "./Items/AccesoriesComponent.vue";
import ManComponent from "./Items/ManComponent.vue";
import WomanComponent from "./Items/WomanComponent.vue";
import CartComponent from "../components/UI/amounts/CartComponent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/pages",
      component: HomeComponent,
    },
    {
      path: "/pages",
      component: HomeComponent,
    },
    {
      path: "/pages/:id",
      component: CategoriesComponent,
    },
    {
      path: "/pages/contact",
      component: ContactComponent,
    },
    {
      path: "/Items",
      component: AccesoriesComponent,
    },
    {
      path: "/Items/:id",
      component: ManComponent,
    },
    {
      path: "/Items/Woman",
      component: WomanComponent,
    },
    {
      path: "/Amounts/Cart",
      component: CartComponent,
    },
  ],
});
export default router;
