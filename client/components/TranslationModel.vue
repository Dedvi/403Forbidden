<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click.prevent="closeModel" aria-hidden="true"></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div v-if="!loading && translate" class="bg-white px-4 pt-5 pb-4 sm:p-6">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h2 class="text-sm font-medium text-blue-gray-900 mb-4">
                  Meaning
                </h2>
                <h3 v-if="translate" class="text-3xl inline-block leading-6 font-medium text-white bg-yellow-500 py-1 px-2" id="modal-title">
                  {{translate.translated}}
                </h3>
                <div class="mt-2" v-if="define">
                  <h4 class="flex items-center text-blue-gray-600 my-4 text-xl">{{define.russian}}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    {{define.orginal}}</h4>
                  <div class="text-sm text-gray-500 flex items-center my-2" v-if="define.phonetics[0]">
                    <p class="mr-3">{{define.phonetics[0][0]}}</p>
                    <button @click="playAudio" class="bg-blue-gray-800 p-1.5 rounded-full flex iems-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    </button>
                    <audio ref="audio">
                      <source :src="define.phonetics[0][1]" type="audio/mpeg">
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div v-if="define.rusPhonetics[0]">
                    <div class="text-sm text-gray-600">
                      <span class="text-gray-900 text-semibold">Part of Speech:</span> {{define.rusPhonetics[0][0]}}
                    </div>
                    <div class="text-sm text-gray-600 mt-2">
                      <span class="text-gray-900 text-semibold">Meaning:</span> {{define.rusPhonetics[0][1]}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <svg xmlns="http://www.w3.org/2000/svg" class="m-auto block w-48 h-48 p-12" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
              <circle cx="50" cy="50" fill="none" stroke="#292664" stroke-width="5" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['selected'],
  data() {
    return {
      translate: null,
      define: null,
      loading: false
    }
  },
  mounted(){
    this.getTranslation()
  },
  methods: {
    closeModel () {
      this.$emit('close')
    },
    playAudio() {
      this.$refs.audio.play()
    },
    async getTranslation(){
      this.loading = true
      try {
        const translation = await this.$axios.$post(`/api/v1/translate`, {text: this.selected.slice(0).trim(), from: 'Russian', to: 'English'});
        this.translate = translation
      } catch (error) {
        console.error(error)
        this.loading = false
      }
      try {
        const defination = await this.$axios.$post(`/api/v1/translate/define`, {word: this.translate.translated, rusWord: this.selected.slice(0).trim()});
        this.define = defination
      } catch (error) {
        console.error(error)
        this.loading = false
      }
      this.loading = false
    }
  },
}
</script>

<style>

</style>