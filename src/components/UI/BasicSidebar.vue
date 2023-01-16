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
  width: 12rem;
  height: 100%;
  border-right: 1px solid #003300;
  border-top: 1px solid #003300;
  border-bottom: 1px solid #003300;
  border-top-right-radius: 5%;
}

@media all and(max-width: 700px) {
  .box {
    width: 8rem;
  }
}
</style>
