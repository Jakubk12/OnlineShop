<template>
  <section>
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin: 1rem;
  -webkit-box-shadow: 1px 3px 15px 1px rgba(66, 68, 90, 1);
  -moz-box-shadow: 1px 3px 15px 1px rgba(66, 68, 90, 1);
  box-shadow: 1px 3px 15px 1px rgba(66, 68, 90, 1);
  height: auto;
  max-height: 50vh;
  margin-left: 1rem;
  margin-right: 0;
  background: white;
  transition: 500ms;
  width: 15vw;

  &:hover {
    scale: 1.2;
  }
}
@media all and (max-width: 1200px) {
  section {
    width: 15rem;
  }
}
@media all and(max-width: 1050px) {
  section {
    width: 12rem;
  }
}
@media all and(max-width: 605px) {
  section {
    width: 10rem;
  }
}
@media all and(max-width: 400px) {
  section {
    width: 30vw;
    margin-left: 1rem;
  }
}
</style>
