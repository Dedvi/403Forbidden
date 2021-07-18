<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-90 transition-opacity" aria-hidden="true" @click="closeModel"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Quiz to mark this article as complete
              </h3>
              {{article.multiple_choice}}
              <div class="mt-2 flex flex-col space-y-4">
                <button @click="selectQuestion(idx, correct)" :class="userAnswer == idx ? 'bg-gray-300' : ''" class="border-2 py-2 border-gray-200 border-opacity-50 rounded-3xl hover:bg-gray-200" v-for="(question, idx) in article.multiple_choice" :key="question.Question">
                  {{question.Question}}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="checkAnswer" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-oranage-500 shadow-sm px-4 py-2 bg-yellow-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Submit
          </button>
          <button @click="closeModel" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Cancel
          </button>
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
      userAnswer: null,
      isCorrect: null
    }
  },
  mounted(){
  },
  methods: {
    closeModel () {
      this.$emit('close')
    },
    selectQuestion(value, correct){
      this.userAnswer = value
      if (correct = true){
        this.isCorrect = true
      }
    },
    checkAnswer(){
      
    },
    answerQuiz(){
      
    }
  },
}
</script>

<style>

</style>