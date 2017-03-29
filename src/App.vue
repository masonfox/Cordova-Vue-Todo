<template>
  <div>
    <navbar></navbar>
    <div class="container app-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'

export default {
  components: {
    navbar
  }
}
</script>

<style>
  .app-view {
    margin-top: 2rem;
  }
</style>
