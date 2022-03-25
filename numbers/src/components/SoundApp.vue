<template>
  <div class="flex justify-center">
    <button @mouseover="play" @mouseleave="stop" label="Trumpet"> 🎺 </button>
  </div>
</template>

<script>
import { useSound } from 'vue-use-sound'
import trumpetSfx from '../assets/sounds/optimus.mp3'

export default {
  setup() {
    const { play, stop } = useSound(trumpetSfx)

    return {
      play,
      stop,
    }
  },
}
</script>
