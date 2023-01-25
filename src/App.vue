<template>
  <the-header></the-header>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/UI/layout/TheHeader.vue";
import TheFooter from "./components/UI/layout/TheFooter.vue";
import { ref, provide } from "vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
  setup() {
    const products = ref([
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
    const test = Object.assign(products);

    console.log(test);

    provide("products", products);
    return {
      products,
      test,
    };
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  font-family: Arial;
  background: linear-gradient(to bottom, #434343 0%, #a2b9bc 100%);
  min-height: 100vh auto;
  overflow: visible;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  transition: opacity 0.5s ease-out;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
</style>
