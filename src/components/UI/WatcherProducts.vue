<template>
  <div class="products">
    <basic-button @click="filterPremium">Premium</basic-button>
    <basic-button @click="filterMiddle">Middle</basic-button>
    <basic-button @click="filterEconomic">Economy</basic-button>
  </div>
  <div class="inner-container">
    <products-component
      v-for="product in displayedProducts"
      :key="product.id"
      :type="product.type"
      :name="product.name"
      :glass="product.glass"
      :price="product.price"
      :destiny="product.destiny"
      :description="product.description"
      :image="product.image"
      :id="product.id"
    ></products-component>
  </div>
</template>

<style lang="scss" scoped>
.products {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10vh;
}
.inner-container {
  height: 75vh auto;
  width: auto;
  display: grid;
  list-style-type: none;
  flex-direction: row;
  flex-wrap: wrap;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 3;
}
</style>

<script>
import ProductsComponent from "./ProductsComponent.vue";
import { computed, ref } from "vue";
export default {
  components: {
    ProductsComponent,
  },

  setup() {
    const displayedProducts = ref([
      {
        id: "0",
        name: "Delbana Fiorentino 41601.682.6.062",
        type: "swiss",
        glass: "sapphire",
        price: 240,
        destiny: "men",
        description: "Elegance classic Watch with black belt",
        image:
          "https://dolinski.pl/images/ab__webp/thumbnails/600/800/detailed/1/Delbana-Florentino-416016826062_jpg.webp",
      },
      //Hugo Boss Hero 1513755
      {
        id: "1",
        type: "swiss",
        name: "Hugo Boss Hero 1513755",
        glass: "saphire",
        price: 360,
        destiny: "men",
        description: "An elegance and endurant silver watch for men",
      },
      {
        id: "2",
        type: "quartz",
        name: "HUGO BOSS VIEW",
        glass: "saphire",
        price: 500,
        destiny: "men",
        description:
          "A sport watch for men with waterproof until 5 atmospheres",
      },
      {
        id: "3",
        type: "quartz",
        name: "Citizen Elegance BI5070-57L",
        glass: "mineral",
        price: 90,
        destiny: "men",
        description:
          "Watch for men with high endurant and good taste with precisious quartz mechanism",
      },
      {
        id: "4",
        type: "quartz",
        name: "Doxa D-Chrono 165.10.021.10",
        glass: "sapphire",
        price: 400,
        destiny: "men",
        description:
          "An casual men watch  with classic character and silver belt, waterproof until 5 meters",
      },
      {
        id: "5",
        type: "automatic",
        name: "Doxa SUB 200 Divingstar Automatic 799.10.361.31",
        glass: "sapphire with antireflex",
        price: 90,
        destiny: "men",
        description:
          "Premium men watch with 200 meters waterproof. It keep your attention by unusual yellow color",
      },
    ]);
    const filters = ref(null);
    // const expectedProducts = computed(function () {
    //   if (!filters.value) {
    //     return expectedProducts;
    //   }
    //   return (displayedProducts.value = displayedProducts.value.filter(
    //     (prd1) => {
    //       if (prd1.price < 250) {
    //         return prd1.price < 250 && filters.value === "economy";
    //       } else if (
    //         prd1.price >= 250 &&
    //         prd1.price <= 1000 &&
    //         filters.value === "middle"
    //       ) {
    //         return prd1.price >= 250 && prd1.price <= 1000;
    //       } else if (prd1.price >= 1000) {
    //         return prd1.price >= 1000 && filters.value === "premium";
    //       }
    //     }
    //   ));
    // });
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
    // function expectedProducts() {
    //   displayedProducts.value = displayedProducts.value.filter((prd1) => {
    //     if (prd1.price < 250) {
    //       return prd1.price < 250 && filters.value === "economy";
    //     } else if (prd1.price > 1000) {
    //       return prd1.price > 1000 && filters.value === "premium";
    //     } else {
    //       prd1.price > 250 && prd1.price < 1000;
    //       return (
    //         prd1.price > 250 && prd1.price < 1000 && filters.value === "middle"
    //       );
    //     }
    //   });
    // }
    function filter(mode) {
      filters.value = mode;
    }
    //   const enterfind = ref("");
    //   const selectedCategProducts = ref("");
    //   const accesibleProducts = computed(function () {
    //     let products = [];
    //     if (selectedCategProducts.value) {
    //       products = props.products;
    //       //   products = props.products.filter((prd) =>
    //       //     prd.price.includes(activeProducts.value)
    //       //   );
    //       // } else if (props.products) {
    //       //   products = props.products;
    //     }
    //     return products;
    //   });
    //   // watch(enterfind, function (newValue) {
    //   //   setTimeout(() => {
    //   //     if (newValue === enterfind.value) {
    //   //       activeProducts.value = newValue;
    //   //     }
    //   //   }, 300);
    //   // });
    //   // return accesibleProducts.value.filter().sort((product) => {
    //   //   if (filters.value === 'premium' && product.price > 1000) {
    //   //     return
    //   //   } else if (filters.value === 'middle' && product.price > 250 || product.price < 1000) {
    //   //     return ;
    //   //   } else if (filters.value === 'economy' && product.price < 250) {
    //   //     return ;
    //   //   } else {
    //   //     return accesibleProducts.value;
    //   //   }
    //   // });
    //   const filters = ref(null);
    //   const displayedProducts = computed(function () {
    //     if (!filters.value) {
    //       return accesibleProducts.value;
    //     }
    //     return accesible.value.filter((prd) => {
    //       if (filters.value === "premium" && prd.price > 1000) {
    //         return product.value.price > 1000;
    //       } else if (
    //         (filters.value === "middle" && products.price > 250) ||
    //         product.value.price < 1000
    //       ) {
    //         return product.price > 250 || product.price < 1000;
    //       } else if (filters.value === "economy" && products.price < 250) {
    //         return product.value.price < 1000;
    //       } else {
    //         return product;
    //       }
    //     });
    //   });
    return {
      filter,
      filters,
      filterEconomic,
      filterMiddle,
      filterPremium,
      displayedProducts,
    };
  },

  //     displayedProducts,
  //     accesibleProducts,
  //     enterfind,
};
</script>
