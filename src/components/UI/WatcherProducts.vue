<template>
    <basic-container>
        <ul>
        <li>{{name}}</li>
        <li>Product details</li>
        <li>{{type}}</li>
        <li>{{material}}</li>
        <li>{{price}}</li>
        <li>{{destiny}}</li>
        <li>{{describe}}</li>
        </ul>
        <products-component v-for="product in StoredProducts"
         :key="product.id"
         :type="product.type"
          :name="product.name"
           :material="product.material"
            :price="product.price"
            :destiny="product.destiny"
            :describe="product.describe"
            :id="product.id"></products-component>



    </basic-container>



    
</template>

<style lang="scss" scoped>
</style>

<script>
import ProductsComponent from './ProductsComponent.vue';
export default {
    props: ['id', 'type', 'name',],
    emits: [],
    components: {
        ProductsComponent
    }
}
</script>
