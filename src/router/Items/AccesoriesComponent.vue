<template>
  <div class="basic">
    <basic-sidebar>
      <div class="buttons-box">
        <basic-inner-button style="margin-top: 1rem" @click="showAll"
          >All</basic-inner-button
        >
        <basic-inner-button @click="showBelts"
          >Belts to Watches</basic-inner-button
        >
        <basic-inner-button @click="showBoxes">Boxes</basic-inner-button>
        <basic-inner-button @click="showGlasses">Glasses</basic-inner-button>
        <basic-inner-button @click="showWinders">Winders</basic-inner-button>
      </div>
    </basic-sidebar>
    <inner-container>
      <accesories-products
        v-for="acces in accesories"
        :key="acces.id"
        :name="acces.name"
        :model="acces.model"
        :type="acces.type"
        :country="acces.country"
        :powersupply="acces.powersupply"
        :price="acces.price"
        :weight="acces.weight"
        :destiny="acces.destiny"
        :amount="acces.amount"
        :material="acces.material"
        :properties="acces.properties"
        :img="acces.img"
      ></accesories-products>
    </inner-container>
  </div>
</template>
<script>
import InnerContainer from "@/components/UI/InnerContainer.vue";
import AccesoriesProducts from "@/components/UI/AccesoriesProducts.vue";
import { ref, inject } from "vue";

export default {
  components: { InnerContainer, AccesoriesProducts },
  setup() {
    const types = ref(null);

    const BoxesAreVisible = ref(true);
    const GlassesAreVisible = ref(false);
    const WinderAreVisible = ref(false);
    const BeltsAreVisible = ref(false);

    const accesories = inject("accesories");
    function showAll() {
      types.value = acces.type.value;
      if (acces.type === "etui") {
        BoxesAreVisible.value = true;
      }
      if (acces.type === "glasses") {
        GlassesAreVisible.value = true;
      }
      if (acces.type === "winder") {
        WinderAreVisible.value = true;
      }
      if (acces.type === "belt") {
        BeltsAreVisible.value = true;
      }
    }
    function showBelts() {
      types.value = acces.type.value;
      if (acces.type === "belt") {
        BeltsAreVisible.value = true;
      }
      if (acces.type === "etui") {
        BoxesAreVisible.value = false;
      }
      if (acces.type === "winder") {
        WinderAreVisible.value = false;
      }
      if (acces.type === "glasses") {
        GlassesAreVisible.value = false;
      }
    }
    return {
      accesories,
      showAll,
      showBelts,
      GlassesAreVisible,
      BoxesAreVisible,
      BeltsAreVisible,
      WinderAreVisible,
    };
  },
};
</script>

<style lang="scss">
.buttons-box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-between;
}
.basic {
  display: flex;
}
</style>
