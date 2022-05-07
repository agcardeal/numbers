<template>
  <button @click="play">Play a sound</button>
</template>

<script>

import { useSound } from '@vueuse/sound'
import sounds from '@/assets/sounds/sounds'

export default {
  setup() {
    const { play, stop, pause } = useSound(sounds.one)
    return {
      play,
      stop,
    }
  },
  mounted () {
    console.log('trumpetSfx ', sounds.one)
  }
}
</script>
