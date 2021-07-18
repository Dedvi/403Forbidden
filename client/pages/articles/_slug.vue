<template>
  <div class="w-full px-10">
    <button @click.prevent="getSelectedData" class="fixed animate-ping bottom-10 right-10 bg-yellow-500 text-white rounded-full p-5">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
    <div class="fixed bottom-48 right-10 bg-yellow-500 py-3 px-5 text-white text-base font-medium rounded-2xl" v-if="helpMessage !== ''">{{helpMessage}}</div>
    <button @click.prevent="getSelectedData" class="fixed bottom-10 right-10 bg-yellow-500 text-white rounded-full p-5">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
  <h1 class="font-bold text-4xl mb-12">{{article.name}}</h1>
    <div id="text" v-html="$md.render(article.text)"></div>
    <translation-model v-if="translateModel" :open="translateModel" :selected="selectedText" @close="closeModel"/>
    <quiz-model v-if="quizPopup" :open="quizPopup" :article="article" @close="closeModel2"/>
    <button @click="quizPopup = true" class="mt-24 mb-12 block mx-auto motion-safe:transition ease-in-out duration-300 bg-yellow-500 text-blue-900 hover:bg-blue-900 hover:text-yellow-500 py-4 px-10 text-center uppercase font-extrabold text-base rounded-3xl" type="submit">Mark Complete</button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth: true,
  layout: "loggedin",
  data() {
    return {
      quizPopup: false,
      translateModel: false,
      selectedText: '',
      helpMessage: ''
    }
  },
  created() {
    this.$store.commit("CHANGE_BACKGROUND_LAYOUT", false);
  },
  async asyncData({ $axios, params }) {
    const article = await $axios.$get(`/api/v1/articles/${params.slug}`);
    return { article };
  },
  methods: {
    closeModel(){
      this.translateModel = false
    },
    closeModel2(){
      this.quizPopup = false
    },
    getSelectedData(){
      var text = "";
      var activeEl = document.activeElement;
      var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
      if (
        (activeElTagName == "textarea") || (activeElTagName == "input" &&
        /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
        (typeof activeEl.selectionStart == "number")
      ) {
          text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
      } else if (window.getSelection) {
          text = window.getSelection().toString();
      }
      this.selectedText = text
      if (this.selectedText !== '') {
        this.translateModel = true
      } else {
        this.helpMessage = 'Oh no, You need to highlight the text you want help with.'
        setTimeout(() => {this.helpMessage = ''}, 2500)
      }
    }
  }
};
</script>

<style></style>
