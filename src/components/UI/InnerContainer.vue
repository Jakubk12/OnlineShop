<template>
  <div class="inner-container"><slot></slot></div>
</template>

<style lang="scss" scoped>
.inner-container {
  height: auto;
  width: 90vw;
  display: grid;
  list-style-type: none;
  flex-direction: row;
  flex-wrap: wrap;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 3;
}
@media screen and (max-width: 1200px) {
  .inner-container {
    grid-template-columns: 33% 33% 33%;
  }
}
@media screen and (max-width: 900px) {
  .inner-container {
    grid-template-columns: 50% 50%;
    grid-template-rows: 1;
    width: 100vw;
  }
}
@media screen and (max-width: 550px) {
  .inner-container {
    grid-template-columns: 100%;
    margin-left: 1rem;
  }
}
</style>
