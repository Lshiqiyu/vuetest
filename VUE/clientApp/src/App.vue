<template>
  <div id="app">
    <router-view></router-view>
    <!--<progress-bar></progress-bar>-->
    <my-component href="/basic"></my-component>
    <router-link to="/progressBar">GotoprogressBar</router-link>
    <router-link to="/basic">Gotobasic</router-link>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import progressBar from './components/progressBar.vue'
  Vue.use(VueRouter)
  Vue.component('my-component', {
    template: '<a>test</a>'
  })
  export default {
    name: 'app',
    components: {
      progressBar
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 0.3rem;
  }
</style>
