<template>
  <div class="container">
    <div class="title">
      <h2>{{ project.name }}</h2>
    </div>
    <div class="images">
      <div v-for="image in project.images" :key="image">
        <img :src="image" alt="" />
      </div>
      <div v-if="project.id === 6">
        <!-- Custom video for Supply Project (id = 6) -->
        <div style="padding:56.25% 0 0 0;position:relative;">
          <iframe
            src="https://player.vimeo.com/video/376453725?autoplay=1&loop=1"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '@/mixins/projects'
import Vue from 'vue'

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
  },
  created() {
    Vue.loadScript('https://player.vimeo.com/api/player.js')
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
