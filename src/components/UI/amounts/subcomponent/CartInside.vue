<template>
  <basic-container style="background: #fedada">
    <h1>your cart is empty.</h1>

    <basic-button @click="removeFromCart">Remove Item</basic-button>
  </basic-container>
  <basic-container
    v-for="prod in prods"
    :key="prod.id"
    :type="prod.type"
    :name="prod.name"
    :glass="prod.glass"
    :price="prod.price"
    :destiny="prod.destiny"
    :img="prod.img"
    :amount="prod.amount"
    ><h1>{{ prods.type }}</h1>
    <h1>{{ prods.name }}</h1>
    <h1>{{ prods.glass }}</h1>
    <h1>{{ prods.price }}</h1>
    <h1>{{ prods.destiny }}</h1>
    <h1>{{ prods.description }}</h1>
    <h1>{{ prods.img }}</h1>
    <h1>{{ prods.amount }}</h1></basic-container
  >
  <!--
  <basic-container
   v-for="product in products"
    :key="product.id"
    :name="product.name"
    :country="acces.country"
    :powersupply="acces.powersupply"
    :price="acces.price" 
  >
  </basic-container> -->
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const prods = inject("selectedProd");

    function removeFromCart() {
      prods.value = prods.value.slice(1);
    }

    // const existingType = ref("");
    // const existingName = ref("");
    // const existingPrice = ref(null);
    // const existingDestiny = ref("");
    // const existingGlass = ref("");
    // const existingDescription = ref("");
    // const existingImg = ref("");
    // const existingAmount = ref("");

    return {
      prods,
      // existingType,
      // existingName,
      // existingPrice,
      // existingDestiny,
      // existingGlass,
      // existingDescription,
      // existingImg,
      // existingAmount,
      // selectedProd,
      removeFromCart,
    };
  },
};
</script>
<style lang="scss" scoped></style>
