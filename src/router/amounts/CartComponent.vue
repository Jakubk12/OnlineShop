<template>
  <basic-section>
    <div class="container-parent">
      <basic-container style="background: #fedada">
        <h1>your cart is empty.</h1>

        <basic-button>Remove Item</basic-button>
      </basic-container>
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
import { inject } from "vue";
export default {
  setup() {
    const products = inject("products");
    const accesories = inject("accersories");
    return {
      products,
      accesories,
    };
  },
};
</script>
