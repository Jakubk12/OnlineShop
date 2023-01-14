<template>
  <basic-sidebar>
    <div class="buttons-box">
      <basic-inner-button style="margin-top: 1rem">All</basic-inner-button>
      <basic-inner-button>Belts to Watches</basic-inner-button>
      <basic-inner-button>Boxes</basic-inner-button>
      <basic-inner-button>Glasses</basic-inner-button>
      <basic-inner-button>Compasses</basic-inner-button>
    </div>
  </basic-sidebar>
</template>
<script>
export default {};
</script>

<style lang="scss">
.buttons-box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-between;
}
</style>
