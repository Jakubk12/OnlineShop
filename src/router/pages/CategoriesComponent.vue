<template>
    <basic-section>
        
        <div class="categories">
    <basic-button @click="sort('premium')" :class="{selected: sorting === 'premium'}">Premium</basic-button>
    <basic-button @click="sort('middle')" :class="{selected: sorting === 'middle'}">Middle</basic-button>
    <basic-button @click="sort('economy')" :class="{selected: sorting === 'economy'}">Economy</basic-button>
    </div>
    <div class="products">
        <watcher-products :products="selectedProduct" @detailsProduct="selectProduct"></watcher-products>

             <!--  <watcher-products v-for="prod in StoredProducts" :key="prod.id"
         :type="prod.type"
          :name="prod.name"
           :material="prod.material"
            :price="prod.price"
            :destiny="prod.destiny"
            :describe="prod.describe"></watcher-products> -->
    </div>

        
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
import {ref} from 'vue'
export default {
    components: {
        WatcherProducts
    },
    setup() {
        const selectedProduct = ref(null)
        const products = PRODUCT_DATA

        function selectProduct(pid) {
            selectedProduct.value = products((prod) => prod.id === pid)

        }

        return { selectedProduct, products, selectProduct}


    }



}
</script>
