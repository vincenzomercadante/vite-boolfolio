<script>
import { apiUri } from "../store";

import axios from "axios";

export default {
  data() {
    return {
      project: {},
    };
  },

  methods: {
    fetchProject() {
      axios.get(apiUri + "projects/" + this.$route.params.id).then((res) => {
        this.project = res.data;
      });
    },
  },

  created() {
    this.fetchProject();
  },
};
</script>

<template>
  <h1 class="my-3 text-success">Details of "{{ project.title }}"</h1>
  <div class="d-flex gap-3">
    <img :src="project.image" alt="" class="img-fluid" />

    <ul class="p-0">
      <li class="d-flex align-items-center gap-3 mb-2">
        <span class="fw-semibold">Title:</span>
        <h2>{{ project.title }}</h2>
      </li>
      <li class="d-flex align-items-center gap-3 mb-2">
        <span class="fw-semibold">Type:</span>
        <span class="badge" :style="'background-color:' + project.type.color">{{
          project.type.label
        }}</span>
      </li>
      <li class="d-flex align-items-center gap-3 mb-4">
        <a :href="project.github_reference">Go to GitHub repo</a>
      </li>
      <li class="d-flex align-items-center gap-2">
        <span class="fw-semibold">Technologies:</span>

        <span
          v-for="tech in project.technologies"
          class="badge"
          :style="'background-color:' + tech.color"
          >{{ tech.label }}</span
        >
      </li>
    </ul>
  </div>
  <div class="mt-3">
    <h3 class="fw-semibold">Description</h3>
    <p>{{ project.description }}</p>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 700px;
}
</style>
