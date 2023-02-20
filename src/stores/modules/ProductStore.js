import { defineStore } from "pinia";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
      accesories: [],
    };
  },
  actions: {
    async fillArray() {
      this.products = (await import("@/items/products.json")).default;
      this.accesories = (await import("@/items/accesories.json")).default;
    },
  },
});
