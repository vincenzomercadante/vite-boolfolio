<script>
import axios from "axios";

import { store } from "../store";

export default {
  data() {
    return {
      projects: [],
      store,
    };
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
  <h1>Project List</h1>
  <div class="row">
    <div v-for="project in store.projects" class="col-4">
      <div class="card d-flex flex-column">
        <figure>
          <img :src="project.image" alt="" class="img-fluid" />
        </figure>
        <div class="p-3">
          <h2>{{ project.title }}</h2>
          <a :href="project.github_reference">Go to GitHub repo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
