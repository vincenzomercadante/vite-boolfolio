<script>
import axios from "axios";

import ProjectCard from "../components/ProjectCard.vue";
import { apiUri, store } from "../store";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      projects: [],
      store,
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    fetchList(apiUrl = apiUri + "projects") {
      axios.get(apiUrl).then((res) => {
        store.projects = res.data.data;
      });
    },
  },

  created() {
    this.fetchList();
  },
};
</script>

<template>
  <h1 class="my-4">Project List</h1>
  <div class="row">
    <div v-for="project in store.projects" class="col-4">
      <RouterLink :to="'/projects/' + project.id" class="text-decoration-none">
        <ProjectCard :project="project" />
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
