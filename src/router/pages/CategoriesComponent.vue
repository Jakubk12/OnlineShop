<template>
  <watcher-products></watcher-products>

  <!--  <watcher-products v-for="prod in StoredProducts" :key="prod.id"
         :type="prod.type"
          :name="prod.name"
           :material="prod.material"
            :price="prod.price"
            :destiny="prod.destiny"
            :describe="prod.describe"></watcher-products> -->
</template>

<script>
import BasicSection from "@/components/UI/BasicSection.vue";
import WatcherProducts from "../../components/UI/WatcherProducts.vue";
export default {
  components: {
    WatcherProducts,
    BasicSection,
  },
};
</script>
