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
    <li v-if="detailsAreVisible">Amount:{{ amount }}</li>
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
import { ref } from "vue";
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
    function viewDetails() {
      detailsAreVisible.value = !detailsAreVisible.value;
    }
    return {
      detailsAreVisible,
      viewDetails,
    };
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
