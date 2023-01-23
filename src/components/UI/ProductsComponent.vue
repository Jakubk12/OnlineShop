<template>
  <basic-container>
    <li class="dot">{{ name }}</li>
    <li v-if="detailsAreVisible" class="dot">Type: {{ type }}</li>
    <li v-if="detailsAreVisible" class="dot">Glass: {{ glass }}</li>
    <li v-if="detailsAreVisible" class="dot">Destination: {{ destiny }}</li>
    <li v-if="detailsAreVisible" class="dot">{{ description }}</li>
    <li class="dot-price">${{ price }}</li>
    <img v-if="!detailsAreVisible" :src="img" />
    <ul>
      Amount:
      <li class="red" v-if="!hasEnoughVal">
        {{ Math.floor(Math.random(amount) * 10) }}
      </li>
      <li class="green" v-if="hasEnoughVal">
        {{ Math.floor(Math.random(amount) * 10) }}
      </li>
    </ul>
    <div class="basic">
      <basic-inner-button @click="viewDetails"> Details</basic-inner-button>
      <basic-inner-button v-if="detailsAreVisible" @click="AddToCart"
        >Add to Cart</basic-inner-button
      >
    </div>
  </basic-container>
</template>

<script>
import { ref, computed } from "vue";
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
    "amount",
  ],
  methods: {},
  setup() {
    const detailsAreVisible = ref(false);
    function viewDetails() {
      detailsAreVisible.value = !detailsAreVisible.value;
    }
    const hasEnoughVal = ref(true);
    const setColor = computed(function () {
      if (amount < 5) {
        return !hasEnoughVal;
      }
    });
    //function getRandomInt() {

    //   };

    return {
      viewDetails,
      detailsAreVisible,
      setColor,
      hasEnoughVal,
      //  getRandomInt,
    };
  },
};
</script>

<style lang="scss" scoped>
.basic {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;

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
  width: 100%;
  height: 20vh;
}
@media all and (min-width: 1400px) {
  img {
    width: 100%;
  }
}
@media all and(max-width: 1200px) {
  .dot,
  .dot-price {
    font-size: small;
  }
}
@media all and(max-width: 500px) {
  .dot,
  .dot-price {
    font-size: x-small;
  }
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
