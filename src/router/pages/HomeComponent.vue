<template>
  <section>
    <div class="main-box">
      <router-link to="/pages/:id"
        ><div class="box">
          <p class="text">TRY TO GET BEST WATCH FOR YOU</p>
          <div class="image"></div></div
      ></router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  .box {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border: 5px solid grey;
    background: #d6cbd3;
    width: 45vw;
    height: 60vh;
    margin-bottom: 25vh;
    transition: 0.8s;
    opacity: 0.5;
    font-family: Impact, Charcoal, sans-serif;
    font-size: 40px;
    letter-spacing: 2.2px;
    word-spacing: 6px;
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    cursor: pointer;
    &:hover {
      opacity: 1;
      text-decoration: none;
      background: inherit;
      color: #d64161;
      background: white;
    }
    &text {
      margin-bottom: 3rem;
      transition: 1s;
      &:hover {
        scale: 1.8;
      }
    }
  }
}
.image {
  height: 35vh;
  width: 65vw;
  background-image: url(https://image.similarpng.com/very-thumbnail/2020/08/Black-watch-on-transparent-background-PNG.png);
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
