import { createRouter, createWebHashHistory } from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import notFoundPage from "../pages/404Page.vue"
import ListProductPage from "../pages/ListProducts.vue";
import DetailProductPage from "../pages/DetailProduct.vue";
import CartPage from "../pages/Cart.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/list-product", component: ListProductPage },
  { path: "/detail-product/:id", component: DetailProductPage },
  { path: "/about", component: About },
  { path: "/cart", component: CartPage },
  { path: "/*", component: notFoundPage}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
