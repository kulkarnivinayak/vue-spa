<template>
  <div id="app">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-16">
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Sokrati Data Analytics</p>
          </article>
        </div>
      </div>
    </div>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
