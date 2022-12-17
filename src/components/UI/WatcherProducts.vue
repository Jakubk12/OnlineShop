<template>
        <div class="inner-container">
        <products-component v-for="product in displayedProducts"
         :key="product.id"
         :type="product.type"
          :name="product.name"
           :glass="product.glass"
            :price="product.price"
            :destiny="product.destiny"
            :description="product.description"
            :id="product.id"
            @list-details="$emit('list-details', $event)"></products-component>
</div>

</template>

<style lang="scss" scoped>
.inner-container {
    height: auto;
    width: auto;
    display: flex;
    justify-content: space-between;
    list-style-type: none;

}
</style>

<script>
import ProductsComponent from './ProductsComponent.vue';
import { ref, computed, watch } from 'vue'
export default {
    provide: ['displayed-products'],
    props: ['products', 'price'],
    emits: ['list-details'],
    components: {
        ProductsComponent
    },
    setup(props) {
        const enterfind = ref('');
    const activeProducts = ref('');

    const accesibleProducts = computed(function () {
      let products = [];
      if (activeProducts.value) {
        products = props.products.filter((usr) =>
          usr.name.includes(activeProducts.value)
        );
      } else if (props.products) {
        products = props.products;
      }
      return products;
    });

    watch(enterfind, function (newValue) {
      setTimeout(() => {
        if (newValue === enterfind.value) {
          activeProducts.value = newValue;
        }
      }, 300);
    });

    const filters = ref(null);
    const displayedProducts = computed(function () {
      if (!filters.value) {
        return accesibleProducts.value;
      }
      return accesibleProducts.value.filter().sort((p1) => {
        if (filters.value === 'premium' && p1.price > 1000) {
          return 1;
        } else if (filters.value === 'middle' && p1.price > 250 || p1.price < 1000) {
          return -1;
        } else if (filters.value === 'economy' && p1.price < 250) {
          return -1;
        } else {
          return 1;
        }
      });
    })
        return {
            filters,
            displayedProducts,
            accesibleProducts,
            enterfind,
            activeProducts
        }
    }
}
</script>
