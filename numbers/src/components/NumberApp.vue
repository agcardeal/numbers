<template>
  <div class="blocks">
    <div v-for="(item, index) in arr" :key="index" class="block" @click="fn(item + num)">
      <p>{{ (item + num) }}</p>
    </div>
    <div>
      <SoundApp />
    </div>
  </div>
</template>

<script>
import SoundApp from './SoundApp'
export default {
  name: 'NumberApp',
  components: { SoundApp },
  data () {
    return {
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  props: {
    num: Number
  },
  methods: {
    fn(n) {
      let number = String(n);

      if(number.length == 1) {
        console.log(n);
        console.log('-----');
        this.$emit('selectedNumber', n)
      } else {
        console.log((n>19) ? number[0] * 10 : number[0]);
        console.log('e');
        console.log(number[1]);
        console.log('-----');
        this.$emit('selectedNumber', number[1])
      }
    }
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
.block:hover {
  background: #444;
  cursor: pointer;
}
.block p {
  color: #fff;
}
</style>
