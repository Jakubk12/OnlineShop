<template>
    <ul>
    <li>{{name}}</li>
    <li>{{type}}</li>
    <li>{{material}}</li>
    <li>{{destiny}}</li>
    <li>{{description}}</li>
    <li>{{price}}</li>
    </ul>
    <basic-button style="background-color: blue" @click="viewDetails"></basic-button>
</template>

<script>
export default {
    props: ['id', 'name', 'destiny', 'description', 'material', 'price', 'type'],
    methods: {
        viewDetails() {
            this.$emit('product-details', this.id)
        }
    }

}

</script>
