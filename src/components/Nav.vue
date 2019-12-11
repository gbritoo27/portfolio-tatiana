<template>
  <b-navbar toggleable="md" class="navbar" ref="navbar">
    <b-navbar-brand href="#" to="/" class="brand">
      <img src="@/assets/images/logo.svg" alt="" />
    </b-navbar-brand>
    <!-- <b-navbar-toggle target="nav_collapse"></b-navbar-toggle> -->

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto justify-content-center text-right">
        <router-link to="/">Projects</router-link>
        <router-link to="/about">About</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: white;
}

.justify-content-center {
  display: inline-block;
  width: 100%;
  text-align: center;
}

.justify-content-center a {
  margin-right: 10px;
  margin-left: 10px;
  font-size: 18px;
  color: #6c7e9a;
}

.justify-content-center a:hover {
  color: #1d3861;
  text-decoration: none;
}

.nav-btn:not(:last-child) {
  margin-right: 15px;
}

.nav-btn img {
  width: 20px;
}

.navbar-nav {
  a {
    padding-right: 12px;
    padding-left: 12px;
  }

  a.router-link-exact-active {
    padding-bottom: 6px;
    color: #1d3861;
    text-decoration: none;
    border-bottom: 2px solid #1d3861;
  }
}

.brand {
  border-bottom: none !important;

  img {
    height: 40px;
  }
}

@media screen and (max-width: 767px) {
  .navbar-brand {
    margin: auto;
  }

  .navbar-collapse {
    display: block !important;
    margin-top: 25px;

    .justify-content-center {
      text-align: center !important;
    }
  }
}
</style>
