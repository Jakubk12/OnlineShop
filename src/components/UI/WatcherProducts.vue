<template>
  <div class="basic">
    <basic-sidebar>
      <div class="products">
        <span>Filter by price class</span>
        <basic-button @click="filterPremium">Premium</basic-button>
        <basic-button @click="filterMiddle">Middle</basic-button>
        <basic-button @click="filterEconomic">Economy</basic-button>
        <span> Sort </span>

        <basic-inner-button
          @click="sort('highest')"
          :class="{ selected: sorting === 'highest' }"
          >highest price</basic-inner-button
        >
        <basic-inner-button @click="sortingByPrice"
          >lowest price</basic-inner-button
        >
        <basic-inner-button>Name</basic-inner-button>
      </div>
    </basic-sidebar>
    <div class="inner-container">
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
        :id="product.id"
      ></products-component>
    </div>
  </div>
</template>

<style lang="scss" scoped>
span {
  text-align: center;
}
.basic {
  display: flex;
}
.products {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-between;
}
.inner-container {
  height: auto;
  width: auto;
  display: grid;
  list-style-type: none;
  flex-direction: row;
  flex-wrap: wrap;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 3;
}
</style>

<script>
import ProductsComponent from "./ProductsComponent.vue";
import { computed, ref, provide } from "vue";
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
        img: "https://dolinski.pl/images/ab__webp/detailed/1/Delbana-Florentino-416016826062_jpg.webp",
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
        img: "https://zegarkinareke.pl/userdata/public/gfx/4750.jpg",
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
        img: "https://wkruk.pl/product_picture/square_1024/cdc0a94a1cd7c4a9f6e3843a50a78cfb.jpg",
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
        img: "https://www.zegarmistrz.com/userdata/gfx/52990.jpg",
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
        img: "https://dolinski.pl/images/ab__webp/detailed/1/Doxa-165-10-015-10_jpg.webp",
      },
      {
        id: "5",
        type: "automatic",
        name: "Doxa SUB 200 Divingstar Automatic 799.10.361.31",
        glass: "sapphire with antireflex",
        price: 1200,
        destiny: "men",
        description:
          "Premium men watch with 200 meters waterproof. It keep your attention by unusual yellow color",
        img: "https://zegarownia.pl/media/catalog/product/cache/1/zoomimage/x1600/z/e/zegarek-meski-doxa-sub-200-divingstar-automatic-799-10-361-31.webp",
      },
      {
        id: "6",
        type: "	Citizen Eco-Drive Satellite cal. F900",
        name: "Citizen CC9015-54E",
        glass: "saphire",
        price: "1300",
        destiny: "men",
        description: "High quality watch for active mens, made by Casio.",
        img: "https://zegarownia.pl/media/catalog/product/cache/1/zoomimage/x1600/z/e/zegarek-meski-citizen-satellite-wave-cc9015-54e.webp",
      },
    ]);
    provide(displayedProducts, "displayedProducts");
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
    function sort(mode) {
      sorting.value = mode;
    }
    const sorting = ref(null);
    const sortingByPrice = computed(function () {
      displayedProducts.value = displayedProducts.value.sort((p1, p2) => {
        if (sorting.value === "highest" && p1.price < p2.price) {
          return 1;
        } else if (sorting.value === "highest") {
          return 1;
        } else if (sorting.value === "lowest" && p1.price > p2.price) {
          return -1;
        } else {
          return 0;
        }
      });
    });
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
      filters,
      filterEconomic,
      filterMiddle,
      filterPremium,
      displayedProducts,
      sortingByPrice,
      sort,
      sorting,
    };
  },

  //     displayedProducts,
  //     accesibleProducts,
  //     enterfind,
};
</script>
