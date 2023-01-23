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
        <div class="watch-center">
          <div class="watch-center-fill">
            <div class="watch-hours-parent">
              <div class="watch-hours">
                <h1 class="c12">12</h1>
              </div>
              <div class="watch-hours-93" style="margin-bottom: 0">
                <h1 class="c9">9</h1>
                <div class="doc-line"></div>
                <div class="line"></div>
                <h1 class="c3">3</h1>
              </div>

              <div class="watch-hours-6"><h1 class="c6">6</h1></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="time-box">
      <ul>
        <!-- <transition
          name="single"
          :css="false"
          @before-enter="BeforeEnter"
          @enter="Enter"
          @after-enter="AfterEnter"
        > -->
        <li class="api">{{ currTime }}</li>
        <!--   </transition> -->
      </ul>
    </div>
    <div class="empty"></div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  height: auto;
  background: #001025;
  margin-bottom: 0 auto;
}
.button-box {
  align-content: space-between;
}
.button-box,
.watch-box,
.watch-hours-parent {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.watch-box {
  align-content: center;
  margin-left: 35vw;
  position: relative;
}
.watch-center-fill {
  height: 9rem;
  width: 9rem;
  border-radius: 50%;
  background: #afa1a1;
  position: relative;
  top: 8px;
  left: 8px;
  right: 5px;
  bottom: 5px;
}
.watch-center {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(186, 186, 186, 1) 0%,
    rgba(124, 116, 116, 1) 16%,
    rgba(0, 0, 0, 1) 40%,
    rgba(171, 171, 171, 1) 67%
  );
  position: relative;
  bottom: 45px;
}
.watch-hours-parent {
  width: 100%;
  align-content: center;
}
.watch-hours,
.watch-hours-111,
.watch-hours-102,
.watch-hours-93,
.watch-hours-84,
.watch-hours-75 {
  display: flex;
  margin-bottom: 3px;
}

.watch-hours-6 {
  display: inline-block;
  margin-left: 0.5rem;
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
  background: #333;
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

.c9 {
  margin-right: 3rem;
}

.c3 {
  margin-left: 3rem;
}
.c3,
.c9 {
  margin-top: 1.5rem;
}

.c6 {
  margin: 0;
  text-align: center;
  margin-right: 10px;
  margin-top: 1rem;
}
.c12 {
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 3rem;
  text-align: center;
}

.doc-line {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  top: 64px;
  left: 64px;
  right: 64px;
  bottom: 64px;
  background: black;
  position: absolute;
}
.line {
  z-index: 1;
  position: absolute;
  background: linear-gradient(to bottom, #333, #333 50%, #333 75%, #afa1a1 75%);
  height: 85px;
  width: 6px;
  border-top-right-radius: 80%;
  border-top-left-radius: 80%;
  bottom: 30px;
  left: 65px;

  -webkit-animation: 10s infinite linear;
  -o-animation: rotating 10s infinite linear;
  animation: rotating 60s infinite linear;
}
@keyframes rotating {
  100% {
    transform: rotateZ(360deg);
  }
}
.time-box {
  display: flex;
  width: 15vw;
  height: 15vh;
}
.api {
  list-style: none;
  color: white;
}
</style>

<script>
import FooterButton from "../FooterButton.vue";
import axios from "axios";
export default {
  components: { FooterButton },
  data() {
    return {
      currTime: "",
      //   endOfAnimation: null,
      //    timeIsVisible: false,
    };
  },
  methods: {
    switchToAbout() {
      this.$router.push("/pages/contact");
    },
    settingCurrentTime() {
      axios
        .get(
          "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Warsaw"
        )
        .then((response) => {
          setInterval(() => {
            this.currTime = response.data.time;
          });
        })

        .catch((er) => {
          console.error("cannot fetch time", er);
        });
    },
  },
  // BeforeEnter(el) {
  //   console.log("before-enter");
  //   console.log(el);
  //   el.style.opacity = 0;
  // },
  // Enter(el, done) {
  //   console.log("enter");
  //   console.log(el);
  //   let round = 1;
  //   this.endOfAnimation = setInterval(() => {
  //     el.style.opacity = round * 0.01;
  //     round++;
  //     if (round > 100) {
  //       clearInterval(this.endOfAnimation);
  //       done();
  //     }
  //   }, 10);
  // },
  // AfterEnter(el) {
  //   console.log(el);
  //   console.log("after-enter");
  // },
  // displayTime() {
  //   this.timeIsVisible = !this.timeIsVisible;
  // },
  created() {
    this.settingCurrentTime();
    //  this.displayTime();
  },
};
</script>
