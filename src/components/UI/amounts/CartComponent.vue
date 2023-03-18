<template>
  <basic-section>
    <div class="container-parent">
      <cart-inside
        v-for="prod in prods"
        :key="prod.id"
        :type="prod.type"
        :name="prod.name"
        :glass="prod.glass"
        :price="prod.price"
        :destiny="prod.destiny"
        :description="prod.description"
        :img="prod.img"
        :amount="prod.amount"
      >
        <h1>{{ name }}</h1>
        <h1>{{ price }}</h1>
        <h1>{{ glass }}</h1>
        <h1>{{ price }}</h1>
        <h1>{{ destiny }}</h1>
        <h1>{{ description }}</h1>
        <h1>{{ img }}</h1>
        <h1>{{ amount }}</h1>
        <h1>{{ img }}</h1>
        <h1>{{ amount }}</h1>
      </cart-inside>

      <!--  id: "1",
        type: "swiss",
        name: "Hugo Boss Hero 1513755",
        glass: "saphire",
        price: 360,
        destiny: "men",
        description: "An elegance and endurant silver watch for men",
        img: "https://zegarkinareke.pl/userdata/public/gfx/4750.jpg",
        amount: 0,-->
    </div>
  </basic-section>
</template>

<style lang="scss" scoped>
.container-parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<script>
import BasicContainer from "@/components/UI/BasicContainer.vue";
import CartInside from "./subcomponent/CartInside.vue";
import { ref, inject } from "vue";
export default {
  components: { BasicContainer, CartInside },
  setup() {
    const allProds = inject("prods");

    return {
      prods: allProds,
    };
  },
};
</script>
