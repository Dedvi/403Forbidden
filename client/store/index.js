export const state = () => ({
   dottedLines: false,
   searchbar: false
})
    
export const mutations = {
  CHANGE_BACKGROUND_LAYOUT(state, Visble) {
    state.dottedLines = Visble;
  },
  CHANGE_BASHOW_SEARCH_BARCKGROUND_LAYOUT(state, Visble) {
    state.searchbar = Visble;
  }
}