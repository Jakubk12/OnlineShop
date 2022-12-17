<template>
    <ul class="basic">
        <basic-container style="max-width: 15vw;">
    <li class="dot">{{name}}</li>
    <li class="dot">{{type}}</li>
    <li class="dot">{{glass}}</li>
    <li class="dot">{{destiny}}</li>
    <li class="dot">{{description}}</li>
    <li class="dot">{{price}} $</li>
    <basic-button style="background-color: blue" @click="viewDetails" >Details</basic-button>
</basic-container>
    </ul>

</template>

<script>
export default {
    props: ['id', 'name', 'type', 'material', 'destiny', 'description', 'price',],
    methods: {
        viewDetails() {
            this.$emit('product-details', this.id)
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