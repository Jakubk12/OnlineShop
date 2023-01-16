<template>
  <section class="header">
    <div class="counter">
      <h1 class="corner">Your cart:</h1>
      <span class="cart">$</span>
    </div>
    <div class="main-nav">
      <router-link to="/pages"><basic-button>Home</basic-button></router-link>
      <router-link to="/pages/:id"
        ><basic-button>Categories</basic-button></router-link
      >
      <router-link to="/Items/:id"
        ><basic-button>Men</basic-button></router-link
      >
      <router-link to="/Items/Woman"
        ><basic-button>Woman</basic-button></router-link
      >
      <router-link to="/Items"
        ><basic-button>Accesories</basic-button></router-link
      >
      <router-link to="/pages/contact"
        ><basic-button>Contact</basic-button></router-link
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
.header {
  height: 15vh;
  margin: 0 auto;
}

.counter {
  display: flex;
  justify-content: flex-end;
  background: #342d2d;
  position: sticky;
}
.corner {
  font-family: Georgia, serif;
  letter-spacing: -1.2px;
  word-spacing: 1.8px;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  margin-right: 2vw;
  &:hover {
    transition: 2s;
    border-bottom: 1px solid transparent;
  }
}
.cart {
  margin-right: 2vw;
  margin-top: 2vh;
  padding: 6px;
  font-size: 10px;
  border-width: 0px;
  border-color: #cccccc;
  background-color: inherit;
  color: #fff;
  border-style: solid;
  border-radius: 9px;
  box-shadow: 0px 0px 13px rgba(66, 66, 66, 0.21);
  text-shadow: 0px 0px 10px rgba(66, 66, 66, 0.75);
  width: 3vw;
  height: 1.5vh;
  font-weight: 900;
  font-size: large;

  &:hover {
    cursor: pointer;
    background-color: red;
    transition: 2.2s;
  }
}
.main-nav {
  display: flex;
  justify-content: center;
  background: #e94b;
  margin-bottom: 1rem;
}
@media all and(max-width: 650px) {
  .main-nav {
    display: grid;
    grid-template-columns: 33% 33% 33%;
  }
  .corner,
  .cart {
    margin-right: 8vw;
  }
}
</style>
