<template>
  <div class="container">
    <div class="title">
      <h2>{{ project.name }}</h2>
    </div>
    <div class="images">
      <div v-for="image in project.images" :key="image">
        <img :src="image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import projects from '@/mixins/projects.js'

export default {
  name: 'project',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  mixins: [projects],
  computed: {
    project() {
      return this.projects.find(project => project.id === this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  padding: 0;

  .images {
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    margin-top: 50px;
    left: 50%;

    img {
      width: 100%;
    }
  }
}
</style>
