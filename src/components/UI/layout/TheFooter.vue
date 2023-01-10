<template>
  <section>
    <div class="button-box">
      <footer-button @click="switchToAbout" style="margin-top: 3rem"
        >Rate us</footer-button
      >
      <footer-button>Send an Email</footer-button>
    </div>
    <div class="watch-box">
      <div class="watch-top-parent"><div class="watch-top"></div></div>
      <div class="watch-bottom-parent">
        <div class="watch-bottom"></div>
        <div class="watch-center"></div>
      </div>
    </div>
    <div class="empty"></div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  min-height: 30vh;
  background: #2c1479;
}
.button-box {
  align-content: space-between;
}
.button-box,
.watch-box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.watch-box {
  align-content: center;
  margin-left: 35vw;
  position: relative;
}
.watch-center {
  min-height: 10rem;
  min-width: 10rem;
  border-radius: 50%;
  background: white;
  position: relative;
  bottom: 45px;
}
.watch-box {
  min-height: 15vh;
}
.watch-top-parent,
.watch-bottom-parent {
  display: flex;
  justify-content: center;
}
.watch-top,
.watch-bottom {
  min-height: 10vh;
  width: 3.2rem;
  background: red;
  position: absolute;
}
.watch-top {
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  bottom: 16vh;
}
.watch-bottom {
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  bottom: 1px;
  border-top-left-radius: -50%;
}
.empty {
  height: 1rem;
}
</style>

<script>
import FooterButton from "../FooterButton.vue";
export default {
  components: { FooterButton },

  methods: {
    switchToAbout() {
      this.$router.push("/pages/contact");
    },
  },
};
</script>
