<template>
  <ul class="basic">
    <basic-container style="max-width: 15vw">
      <li class="dot">{{ name }}</li>
      <li v-if="detailsAreVisible" class="dot">Type: {{ type }}</li>
      <li v-if="detailsAreVisible" class="dot">Glass: {{ glass }}</li>
      <li v-if="detailsAreVisible" class="dot">Destination: {{ destiny }}</li>
      <li v-if="detailsAreVisible" class="dot">{{ description }}</li>
      <li class="dot-price">${{ price }}</li>
      <img v-if="!detailsAreVisible" :src="img" />
      <div class="basic">
        <basic-inner-button @click="viewDetails"> Details</basic-inner-button>
        <basic-inner-button v-if="detailsAreVisible" @click="AddToCart"
          >Add to Cart</basic-inner-button
        >
      </div>
    </basic-container>
  </ul>
</template>

<script>
import { ref } from "vue";
export default {
  props: [
    "id",
    "name",
    "type",
    "glass",
    "destiny",
    "description",
    "price",
    "img",
  ],
  methods: {},
  setup() {
    const detailsAreVisible = ref(false);
    function viewDetails() {
      detailsAreVisible.value = !detailsAreVisible.value;
    }
    return {
      viewDetails,
      detailsAreVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
.basic {
  display: flex;
  justify-content: space-around;
  list-style-type: none;

  .dot,
  .dot-price {
    margin-top: 1vh;
    margin-bottom: 1vh;
    margin-left: 1vw;
    margin-right: 1vw;
    font-family: "Arial Black", Gadget, sans-serif;
  }
  font-size: 19px;
  letter-spacing: 0px;
  word-spacing: 2px;
  color: #000000;
  font-weight: normal;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: normal;
  font-variant: normal;
  text-transform: none;
}
.dot-price {
  color: green;
}

img {
  width: 10vw;
  height: 20vh;
}
</style>
