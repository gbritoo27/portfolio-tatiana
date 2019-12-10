<template>
  <div class="container">
    <div class="row">
      <div
        v-for="project in projects"
        :key="project.name"
        class="col-md-6 mx-auto"
      >
        <div class="project" @click="goToProject(project.id)">
          <img :src="project.thumbnail" alt="" />
          <div class="overlay">
            <div class="title">
              {{ project.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '@/mixins/projects.js'

export default {
  name: 'portfolio',
  mixins: [projects],
  methods: {
    goToProject(id) {
      this.$router.push({
        name: 'project',
        params: { id: id }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 0;

  .col-md-6 {
    padding: 15px;
  }

  .project {
    position: relative;
    text-align: center;
    box-shadow: black 0px 0px 12px;
    transition: 0.5s ease;

    img {
      width: 100%;
      height: 100%;
      background: rgb(0, 0, 0);
    }

    .overlay {
      // height: -webkit-fill-available !important;
      height: 100%;
      display: flex;
      display: -webkit-flex;
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.5);
      width: 100%;
      position: absolute;
      top: 0;
      transition: opacity 0.5s ease;
      transition-timing-function: ease;
      transition-duration: 0.5s;
      transition-property: opacity;
      opacity: 0;
      text-align: center;
      cursor: pointer;

      .title {
        width: 100%;
        color: #ffffff;
        font-weight: 600;
        text-shadow: black 0px 0px 8px;
        font-size: 28px;
        line-height: 28px;
        margin: auto;
        height: 28px;
      }
    }
  }

  .project:hover .overlay {
    opacity: 1;
  }
}
</style>
