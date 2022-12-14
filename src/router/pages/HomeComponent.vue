<template>
    <section>
    <div class="main-box">
        <div class="box"></div>
    </div>
    </section>

</template>

<style scoped lang="scss">

.main-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
.box {
    width: 45vw;
    height: 60vh;
    background-color: grey;
    margin-bottom: 25vh;
    transition: .8s;
    opacity: 0.25;
    &:hover {
        opacity: 1.0;
    }
}
}
</style>