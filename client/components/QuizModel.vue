<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-90 transition-opacity" aria-hidden="true" @click="closeModel"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-6" id="modal-title">
              Here is a quiz to mark this article off the list
            </h3>
            <div class="mt-2 flex flex-col space-y-4" v-if="!isCorrect || !userAnswer">
              <button @click="selectQuestion(question.Question ,idx)" :class="userIdx == idx ? 'bg-gray-400' : ''" :disabled="userAnswer" class="border-2 py-2 border-gray-200 border-opacity-50 rounded-3xl hover:bg-gray-200" v-for="(question, idx) in article.multiple_choice" :key="question.Question">
                {{question.Question}}
              </button>
            </div>
            <div class="text-center font-medium text-xl" v-if="message">{{message}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article'],
  data() {
    return {
      loading: false,
      userAnswer: false,
      isCorrect: false,
      userIdx: null,
      message: '',
      loading: false
    }

  },
  methods: {
    closeModel () {
      this.$emit('close')
    },
    async selectQuestion(question, idx){
      this.userIdx = idx
      if (this.article.multiple_choice[idx].corrent == "true") {
        this.isCorrect = true
        this.message = "Wow, you have answered correctly, Good Job! (+10 Points)"

        await this.$axios.$post(`/api/v1/articles/complete`, {slug: this.$route.params.slug});
        this.$auth.fetchUser()

        setTimeout(() => {this.$router.push('/articles')}, 2500)
      } else {
        this.userAnswer = true
        this.message = "Sorry, you have answered wrong, Try to read this article again"
      }
    },
  },
}
</script>

<style>

</style>