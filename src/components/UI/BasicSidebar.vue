<template>
  <section>
    <div class="box"><slot></slot></div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: block;
  height: 100vh;
}
.box {
  background: #ebebf3;
  float: left;
  margin-left: 0;
  width: 12vw;
  height: 98%;
  border-right: 1px solid #003300;
  border-top: 1px solid #003300;
  border-bottom: 1px solid #003300;
  border-top-right-radius: 5%;
}
</style>
