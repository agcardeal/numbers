<template>
  <button @click="play">Play a sound</button>
</template>

<script>

import { useSound } from '@vueuse/sound'
import trumpetSfx from '@/assets/sounds/optimus.mp3'

export default {
  setup() {
    const { play, stop, pause } = useSound(trumpetSfx)
    return {
      play,
      stop,
    }
  },
  mounted () {
    console.log('trumpetSfx ', trumpetSfx)
  }
}
</script>
