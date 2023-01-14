<template>
  <basic-section></basic-section>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const prods = inject("displayedProducts");

    return {
      inject,
      prods,
    };
  },
};
</script>
