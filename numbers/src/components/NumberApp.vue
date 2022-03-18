<template>
  <div class="blocks">
    <div v-for="(item, index) in arr" :key="index" class="block">
      <p>{{ (item + num) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumberApp',
  data () {
    return {
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  props: {
    num: Number
  }
}
</script>

<style scoped>
.blocks {
  display: flex;
  justify-content: space-evenly;
}
.block {
  border: 1px solid #000;
  width: 100%;
  height: 100px;
  align-items: stretch;
  text-align: center;
}
.block p {
  color: #fff;
}
</style>
