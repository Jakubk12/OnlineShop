<template>
         
    <basic-section>
        <div class="products">
        <basic-button @click="filter('premium')" :class="{selected: filtering === 'premium'}">Premium</basic-button>
    <basic-button @click="filter('middle')" :class="{selected: filtering === 'middle'}">Middle</basic-button>
    <basic-button @click="filter('economy')" :class="{selected: filtering === 'economy'}">Economy</basic-button>
    </div>
        <watcher-products :products="activeProducts" @detailsProduct="selectProduct"></watcher-products>
        <product-details :product="selectedProduct"></product-details>

             <!--  <watcher-products v-for="prod in StoredProducts" :key="prod.id"
         :type="prod.type"
          :name="prod.name"
           :material="prod.material"
            :price="prod.price"
            :destiny="prod.destiny"
            :describe="prod.describe"></watcher-products> -->        
    </basic-section>
</template>

<style lang="scss" scoped>

.categories, .products {
    display: flex;
    justify-content: space-evenly;
    margin-top: 10vh;
}
</style>

<script>
import PRODUCT_DATA from '../../product-data.js'
import WatcherProducts from '../../components/UI/WatcherProducts.vue'
import ProductList from '../../components/UI/ProductDetails.vue'
import {ref} from 'vue'
export default {
    components: {
        WatcherProducts, ProductList
    },
    setup() {
        const selectedProduct = ref(null)
        const activeProducts = PRODUCT_DATA;

        function selectProduct(pid) {
            selectedProduct.value = products((prod) => prod.id === pid)
        }
        return { selectedProduct, activeProducts, selectProduct}
    }

}
</script>
