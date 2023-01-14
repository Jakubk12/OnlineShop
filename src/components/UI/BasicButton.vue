<template>
  <button><slot></slot></button>
</template>

<style lang="scss" scoped>
button {
  float: left;
  background: inherit;
  background-color: inherit;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 24px;
  text-decoration: none;
  border: 0;
  transition: 1500ms;
  max-height: 5vh;
}
button:hover,
button:active {
  background-color: #ce0100;
  scale: 1.1;
}
</style>
