<template>
  <button><slot></slot></button>
</template>

<style lang="scss" scoped>
button {
  color: #fff;
  width: 5vw;
  height: 5vh;
  background: inherit;
  transition: 0.5s;
  padding: 5px grey;
  font-weight: bold;
  border-right: 0;
  border-top: 0;
  border-bottom: 0;
  border-color: #fff;
  margin-left: 15rem;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
}
@media all and(max-width: 700px) {
  button {
    margin-left: 6rem;
  }
}
@media all and(max-width: 400px) {
  button {
    margin-left: 3rem;
  }
}
</style>
