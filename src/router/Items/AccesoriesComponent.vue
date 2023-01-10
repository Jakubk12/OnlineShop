<template>
  <basic-section>
    <basic-sidebar>
      <div class="box">
        <div class="buttons-box">
          <basic-inner-button style="margin-top: 1rem; color: black"
            >All</basic-inner-button
          >
          <basic-inner-button style="color: black"
            >Belts to Watches</basic-inner-button
          >
          <basic-inner-button style="color: black">Boxes</basic-inner-button>
          <basic-inner-button style="color: black">Glasses</basic-inner-button>
          <basic-inner-button style="color: black"
            >Compasses</basic-inner-button
          >
        </div>
      </div>
    </basic-sidebar>
  </basic-section>
</template>
<script>
export default {};
</script>

<style lang="scss">
.box {
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  float: left;
  margin-left: 0;
  width: 12vw;
  height: 98%;
  border-right: 1px solid #003300;
  border-top: 1px solid #003300;
  border-bottom: 1px solid #003300;

  .buttons-box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: space-between;
  }
}
</style>
