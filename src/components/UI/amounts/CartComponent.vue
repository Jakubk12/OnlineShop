<template>
  <basic-section>
    <div class="container-parent">
      <cart-inside>
        <h1>{{ selectedProduct.name }}</h1>
      </cart-inside>
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
export default {
  props: ["selectedProduct"],
  components: { BasicContainer, CartInside },
  data() {
    return {
      mainProducts: this.selectedProduct,
    };
  },
  created() {},
  // methods: {
  //   addToCart() {
  //     this.productsList.push(cart);
  //   },
  // },
  // created() {
  //   this.addToCart();
  // },
};
</script>
