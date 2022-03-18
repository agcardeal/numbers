<template>
  <div class="app">
    <div v-for="(item, index) in 10" :key="index">
      <NumberApp :num="(index) * 10" />
    </div>
  </div>
</template>

<script>
import NumberApp from './components/NumberApp.vue'

export default {
  name: 'App',
  components: {
    NumberApp
  },
  data () {
    return {
      arr: [2, 4]
    }
  }
}
</script>

<style>
.app {
  padding: 20px;
  background: #222;
}
</style>
