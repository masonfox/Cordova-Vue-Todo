<template>
  <div class="my-nav bg-faded">
    <div class="container">
      <nav class="navbar navbar-toggleable-md navbar-light">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">Cordova Todo</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active" v-for="route in routes">
              <a class="nav-link" :href="route.path">{{ route.component.name }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import routes from '../router/routes'

export default {
  data () {
    return {
      routes
    }
  }
}
</script>

<style>
  .my-nav {
    border-bottom: 1px solid #eee;
  }
</style>
