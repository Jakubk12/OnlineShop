<template>
  <basic-container style="background: #fedada">
    <h1>your cart is empty.</h1>

    <basic-button>Remove Item</basic-button>
  </basic-container>
  <basic-container>{{ selectedProduct }}</basic-container>
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

<script></script>
<style lang="scss" scoped></style>
