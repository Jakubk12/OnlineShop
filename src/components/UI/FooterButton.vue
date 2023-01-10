<template>
  <button><slot></slot></button>
</template>

<style lang="scss" scoped>
button {
  width: 5vw;
  height: 5vh;
  background: inherit;
  transition: 0.5s;
  padding: 5px grey;
  font-weight: bold;
  border-right: 0;
  border-top: 0;
  border-bottom: 0;
  margin-left: 15rem;
  cursor: pointer;
  &:hover {
    background: white;
    scale: 1.1;
  }
}
</style>
