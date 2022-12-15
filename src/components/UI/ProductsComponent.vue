<template>
    <li>{{Name}}</li>
    <button @click="viewDetails"></button>
</template>

<script>
export default {
    props: ['id', 'Name']
}
</script>
