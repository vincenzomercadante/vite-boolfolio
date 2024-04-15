<script>
import axios from "axios";

import ProjectCard from "./ProjectCard.vue";
import { store } from "../store";

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
    fetchList(apiUrl = "http://127.0.0.1:8000/api/projects") {
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
      <ProjectCard :project="project" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
