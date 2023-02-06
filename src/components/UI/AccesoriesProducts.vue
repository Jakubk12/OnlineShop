<template>
  <basic-container>
    <li>{{ name }}</li>
    <li>{{ type }}</li>
    <li>{{ model }}</li>
    <li v-if="detailsAreVisible">Country:{{ country }}</li>
    <li v-if="detailsAreVisible">{{ powersupply }}</li>
    <li v-if="detailsAreVisible">Price: {{ price }}</li>
    <li v-if="detailsAreVisible">{{ weight }}</li>
    <li v-if="detailsAreVisible">{{ destiny }}</li>
    <li v-if="detailsAreVisible">
      Amount:{{ Math.floor(Math.random(amount) * 15) }}
    </li>
    <li v-if="detailsAreVisible">{{ material }}</li>
    <li v-if="detailsAreVisible">{{ properties }}</li>
    <li>{{ img }}</li>
    <div class="basic">
      <basic-inner-button @click="viewDetails"> Details</basic-inner-button>
      <basic-inner-button v-if="detailsAreVisible" @click="AddToCart"
        >Add to Cart</basic-inner-button
      >
    </div>
  </basic-container>
</template>

<script>
import { ref, computed, inject } from "vue";
export default {
  props: [
    "name",
    "type",
    "model",
    "country",
    "powersupply",
    "price",
    "weight",
    "destiny",
    "amount",
    "material",
    "properties",
    "img",
  ],
  setup() {
    const detailsAreVisible = ref(false);
    const accesories = inject("accesories");
    function viewDetails() {
      detailsAreVisible.value = !detailsAreVisible.value;
    }
    const randomAmount = computed(function () {
      return amount.value.math.floor(Math.random() * 15);
    });

    return {
      detailsAreVisible,
      viewDetails,
      randomAmount,
      accesories,
    };
  },
  methods: {
    AddToCart() {
      const selectedProduct = [];
      this.accesories.push(selectedProduct);
      this.$router.push("/Amounts/Cart");
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  font-family: Georgia, serif;
  font-size: 16px;
  letter-spacing: 4.8px;
  word-spacing: 6px;
  color: #000000;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
}
</style>
