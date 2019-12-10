<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Portfolio from './components/Portfolio'
import Nav from '@/components/Nav'

export default {
  name: 'app',
  components: {
    Portfolio,
    Nav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Archivo:600&display=swap');

#app {
  font-family: 'Archivo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
