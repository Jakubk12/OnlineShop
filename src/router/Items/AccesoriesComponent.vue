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
import { ref, inject, provide } from "vue";

export default {
  components: { InnerContainer, AccesoriesProducts },
  setup() {
    const types = ref(null);

    const BoxesAreVisible = ref(false);
    const GlassesAreVisible = ref(false);
    const WinderAreVisible = ref(false);
    const BeltsAreVisible = ref(false);

    const accesories = inject("accesories");
    const selectedProducts = ref([]);
    provide("selectedProducts", selectedProducts);

    function showAll() {
      selectedProducts.value = accesories.filter((acces) => acces.type !== "");
    }

    function showBelts() {
      selectedProducts.value = accesories.filter(
        (acces) => acces.type === "belt"
      );
    }

    function showGlasses() {
      selectedProducts.value = accesories.filter(
        (acces) => acces.type === "glasses"
      );
    }

    function showBoxes() {
      selectedProducts.value = accesories.filter(
        (acces) => acces.type === "etui"
      );
    }

    function showWinders() {
      selectedProducts.value = accesories.filter(
        (acces) => acces.type === "winder"
      );
    }
    return {
      accesories,
      showAll,
      showBelts,
      showGlasses,
      showWinders,
      showBoxes,
      GlassesAreVisible,
      BoxesAreVisible,
      BeltsAreVisible,
      WinderAreVisible,
      types,
      selectedProducts,
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
