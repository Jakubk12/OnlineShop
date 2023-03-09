<template>
  <div class="basic">
    <basic-sidebar style="height: 100vh">
      <div class="products">
        <span>Filter by price class</span>
        <basic-button @click="filterPremium" style="color: #d24dff"
          >Premium</basic-button
        >
        <basic-button @click="filterMiddle" style="color: #d24dff"
          >Middle</basic-button
        >
        <basic-button @click="filterEconomic" style="color: #d24dff"
          >Economy</basic-button
        >
        <span> Sort </span>

        <basic-inner-button @click="higherPrice"
          >highest price</basic-inner-button
        >
        <basic-inner-button @click="lowerPrice"
          >lowest price</basic-inner-button
        >
        <basic-inner-button @click="sortAlphA">Name A-Z</basic-inner-button>
        <basic-inner-button @click="sortAlphZ">Name Z-A</basic-inner-button>
      </div>
    </basic-sidebar>
    <inner-container>
      <!-- -->
      <products-component
        v-for="product in displayedProducts"
        :key="product.id"
        :type="product.type"
        :name="product.name"
        :glass="product.glass"
        :price="product.price"
        :destiny="product.destiny"
        :description="product.description"
        :img="product.img"
        :amount="product.amount"
        :id="product.id"
      ></products-component>
    </inner-container>
  </div>
</template>

<style lang="scss" scoped>
span {
  text-align: center;
}
.basic,
.products {
  display: flex;
}
.products {
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-between;
}
</style>

<script>
import ProductsComponent from "./ProductsComponent.vue";
import InnerContainer from "./InnerContainer.vue";
//import { useProductStore } from "@/stores/modules/CartStore.js";

import { ref, inject } from "vue";
export default {
  components: {
    ProductsComponent,
    InnerContainer,
  },
  setup() {
    const displayedProducts = inject("products");
    const filters = ref(null);
    //  const productStore = useProductStore();

    function filterEconomic() {
      displayedProducts.value = displayedProducts.value.filter(
        (prd) => prd.price <= 250
      );
    }
    function filterMiddle() {
      displayedProducts.value = displayedProducts.value.filter(
        (prd) => prd.price >= 250 && prd.price <= 1000
      );
    }
    function filterPremium() {
      displayedProducts.value = displayedProducts.value.filter(
        (prd) => prd.price >= 1000
      );
    }
    function lowerPrice() {
      displayedProducts.value = displayedProducts.value.sort((p1, p2) => {
        if (p1.price > p2.price) {
          return 1;
        } else if (p1.price < p2.price) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    function higherPrice() {
      displayedProducts.value = displayedProducts.value.sort((p1, p2) => {
        if (p2.price > p1.price) {
          return 1;
        } else if (p2.price < p1.price) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    function sortAlphA() {
      displayedProducts.value = displayedProducts.value.sort((p1, p2) => {
        if (p1.name > p2.name) {
          return 1;
        } else if (p1.name < p2.name) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    function sortAlphZ() {
      displayedProducts.value = displayedProducts.value.sort((p1, p2) => {
        if (p2.name > p1.name) {
          return 1;
        } else if (p2.name < p1.name) {
          return -1;
        } else {
          return 0;
        }
      });
    }

    return {
      // productStore,
      filters,
      filterEconomic,
      filterMiddle,
      filterPremium,
      displayedProducts,
      sortAlphA,
      sortAlphZ,
      lowerPrice,
      higherPrice,
    };
  },
};
</script>
