<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="card d-flex flex-column">
    <figure>
      <img :src="project.image" alt="" class="img-fluid" />
    </figure>
    <div class="p-3 d-flex flex-column align-items-start gap-1">
      <h2>{{ project.title }}</h2>
      <span class="badge" :style="'background-color:' + project.type.color">{{
        project.type.label
      }}</span>

      <a :href="project.github_reference">Go to GitHub repo</a>
      <div class="d-flex gap-2 mt-2">
        <span
          v-for="tech in project.technologies"
          class="badge"
          :style="'background-color:' + tech.color"
          >{{ tech.label }}</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
