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
        :amount="product.amount"
        :id="product.id"
      ></products-component>
    </div>
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
.inner-container {
  height: auto;
  width: 90vw;
  display: grid;
  list-style-type: none;
  flex-direction: row;
  flex-wrap: wrap;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 3;
}
@media screen and (max-width: 1200px) {
  .inner-container {
    grid-template-columns: 33% 33% 33%;
  }
}
@media screen and (max-width: 900px) {
  .inner-container {
    grid-template-columns: 50% 50%;
    grid-template-rows: 1;
    width: 100vw;
  }
}
@media screen and (max-width: 550px) {
  .inner-container {
    grid-template-columns: 100%;
    margin-left: 1rem;
  }
}
</style>

<script>
import ProductsComponent from "./ProductsComponent.vue";
//import { useProductStore } from "@/stores/modules/CartStore.js";

import { created, ref, provide } from "vue";
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
        amount: 0,
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
        amount: 0,
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
        amount: 0,
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
        amount: 0,
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
        amount: 1,
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
        amount: 0,
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
        amount: 0,
      },
    ]);
    provide(displayedProducts, "displayedProducts");
    const filters = ref(null);
    // const productStore = useProductStore();

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
