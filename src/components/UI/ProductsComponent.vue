<template>
    <ul class="basic">
        <basic-container style="max-width: 15vw;">
    <li class="dot">{{name}}</li>
    <li v-if="detailsAreVisible" class="dot"> Type: {{type}}</li>
    <li v-if="detailsAreVisible" class="dot"> Glass: {{glass}}</li>
    <li v-if="detailsAreVisible" class="dot"> Destination: {{destiny}}</li>
    <li v-if="detailsAreVisible" class="dot"> Description: {{description}}</li>
    <li v-if="detailsAreVisible" class="dot"> Price: {{price}} $</li>
    <basic-button style="background-color: blue; position: relative; left: 0.5rem; bottom: 0.5rem; " @click="viewDetails" >Details</basic-button>
    <basic-button style="height: 50%; width: 50%;" v-if="detailsAreVisible" @click="AddToCart">Add to Cart</basic-button>
</basic-container>
    </ul>

</template>

<script>
import { ref } from 'vue'
export default {
    props: ['id', 'name', 'type', 'glass', 'destiny', 'description', 'price',],
    methods: {
        viewDetails() {
            this.$emit('product-details', this.id)
        }
    },
    setup() {
        const detailsAreVisible = ref(false)
        function viewDetails() {
            detailsAreVisible.value = !detailsAreVisible.value; 
        }
        return {
            viewDetails, detailsAreVisible, 
        }
    }

}

</script>

<style lang="scss" scoped>
.basic {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    .dot {
        margin-top: 1vh;
        margin-bottom: 1vh;
        margin-left: 1vw;
        margin-right: 1vw;
        font-family: "Arial Black", Gadget, sans-serif;
font-size: 19px;
letter-spacing: 0px;
word-spacing: 2px;
color: #000000;
font-weight: normal;
text-decoration: none solid rgb(68, 68, 68);
font-style: normal;
font-variant: normal;
text-transform: none;
    }
}
</style>