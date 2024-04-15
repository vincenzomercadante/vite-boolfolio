<script>
import { RouterView } from "vue-router";

import AppHeader from "./components/_partials/AppHeader.vue";

export default {
  data() {
    return {
      appName: "Boolfoglio",
    };
  },

  components: { AppHeader },
};
</script>

<template>
  <AppHeader :title="appName" />
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss">
@import "/src/assets/style/general.scss";
</style>
