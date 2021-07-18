<template>
  <div class="flex flex-1 items-center py-4 px-12">
    <div class="flex-1">
      <div v-if="showSearchbar">
        
      </div>
    </div>
    <div>
      <select v-model="lang" @change="languageSelect" class="w-full pl-4 pr-8 py-3 text-base font-bold text-blue-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg appearance-none bg-blue-gray-100 focus:border-blue-gray-900 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
        <option class="block mb-4 text-sm font-bold tracking-wide text-blue-gray-500" value="English">English</option>
        <option class="block mb-4 text-sm font-bold tracking-wide text-blue-gray-500" value="français">français</option>
        <option class="block mb-4 text-sm font-bold tracking-wide text-blue-gray-500" value="عربى">عربى</option>
        <option class="block mb-4 text-sm font-bold tracking-wide text-blue-gray-500" value="русский">русский</option>
        <option class="block mb-4 text-sm font-bold tracking-wide text-blue-gray-500" value="हिंदी">हिंदी</option>
        <option class="block mb-4 text-sm font-bold tracking-wide text-blue-gray-500" value="日本語">日本語</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      lang: 'English'
    }
  },
  computed: {
    showSearchbar() {
        return this.$store.state.searchbar;
    }
  },
  methods:{
    languageSelect(){
      if (this.lang != 'English') alert('Application Language Translations Coming soon!')
    }
  }
}
</script>

<style>

</style>