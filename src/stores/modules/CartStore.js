import { defineStore } from "pinia";

export const CartStore = defineStore("CartStore", () => {
  const cart = ref([]);

  function increment() {
    cart.value++;
  }
  function resetStore() {
    cart.value = 0;
  }
  return {
    increment,
    cart,
    resetStore,
  };
  //state
  //actions
  //getters
});
