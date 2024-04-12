<script>
import AppHeader from "./components/_partials/AppHeader.vue";
import ProjectsList from "./components/ProjectsList.vue";

export default {
  data() {
    return {
      appName: "Boolfoglio",
    };
  },

  components: { AppHeader, ProjectsList },
};
</script>

<template>
  <AppHeader :title="appName" />
  <main>
    <div class="container">
      <ProjectsList />
    </div>
  </main>
</template>

<style lang="scss">
@import "/src/assets/style/general.scss";
</style>
