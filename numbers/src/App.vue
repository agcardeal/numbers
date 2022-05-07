<template>
  <div class="app" style="border: 3px solid blue">
    Select Voice: <select id='voiceList'></select> <br><br>
    <input v-model="input" id='txtInput' /> <br><br>    {{ input }}
    <button @click="teste">Falar!</button>
    <div v-for="(item, index) in 10" :key="index" @click="teste">
      <NumberApp :num="(index) * 10" @selectedNumber="selectedNumber" />
    </div>
  </div>
</template>

<script>
import NumberApp from './components/NumberApp.vue'

const synth = window.speechSynthesis
const voices = [];

export default {
  name: 'App',
  components: {
    NumberApp
  },
  data () {
    return {
      input: null,
      input2: null,
      arr: [2, 4]
    }
  },
  methods: {
    selectedNumber (e) {
      this.input2 = e
    },
    teste() {
      console.log('teste')
      var toSpeak = new SpeechSynthesisUtterance(this.input2);
        // var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
        var voz = "Portuguese (Brazil)"
        voices.forEach((voice)=>{
            /* if(voice.name === selectedVoiceName){
                toSpeak.voice = voice;
            } */

           toSpeak.voice  = { voiceURI: "urn:moz-tts:speechd:Portuguese%20(Brazil)?pt", name: "Portuguese (Brazil)", lang: "pt", localService: false, default: false }
        });
        synth.speak(toSpeak);
    },
    populateVoices() {
            voices = synth.getVoices();
            var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
            voiceList.innerHTML = '';
            voices.forEach((voice)=>{
                var listItem = document.createElement('option');
                listItem.textContent = voice.name;
                listItem.setAttribute('data-lang', voice.lang);
                listItem.setAttribute('data-name', voice.name);
                voiceList.appendChild(listItem);
            });

            voiceList.selectedIndex = selectedIndex;
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
