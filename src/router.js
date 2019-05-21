import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from "views/About.vue";
import Form from "views/Form_template.vue";
import ProductList from 'components/ProductsList.vue';
import Product from 'components/Product.vue';
import Cart from 'components/Cart.vue';
import E404 from 'components/E404.vue';

//import {store} from './store';

const routes = [
  {
    path: '',
    redirect: {name: 'products'}
  },
  {
    name: 'products',
    path: '/products',
    component: ProductList,
    // beforeEnter(from, to, next){
    //   store.dispatch('products/loadItems');
    //   next();
    // }
  },
  {
    path: '/products/:id',
    component: Product
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '*',
    component: E404
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/form",
    name: "form",
    component: Form
  }
];

export const router = new VueRouter({
  routes,
  mode: 'history'
});
