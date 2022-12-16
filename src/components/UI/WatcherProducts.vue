<template>
    <basic-container style="max-width: 15vw; height: 20vh;">
        <div class="inner-container">
        <products-component v-for="product in storedProducts"
         :key="product.id"
         :type="product.type"
          :name="product.name"
           :material="product.material"
            :price="product.price"
            :destiny="product.destiny"
            :describe="product.describe"
            :id="product.id"
            @list-details="$emit('list-details', $event)"></products-component>
</div>


    </basic-container>



    
</template>

<style lang="scss" scoped>
.inner-container {
    height: 5vh;
    width: 10vw;
}
</style>

<script>
import ProductsComponent from './ProductsComponent.vue';
import { ref } from 'vue'
export default {
    props: ['products', 'price'],
    emits: ['list-details'],
    components: {
        ProductsComponent
    },
    setup(props) {
        const sort = ref(null) 
        
        


        return {}
    }
}
</script>
