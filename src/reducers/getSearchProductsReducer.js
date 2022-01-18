let initial_state = {
    word: '',
    onSearch : false,
    products : []
}
const getSearchProductsReducer = (state=initial_state, action) => {
    switch (action.type) {
      case "SET_SEARCH_PRODUCTS":
        return {
            word: action.payload.word,
            onSearch: true,
            products: action.payload.product
        }
      case "SET_SEARCH_FALSE":
        return {
            onSearch: false,
            products: [],
            word: ""
        }
      case "SET_WORD":
          return {
              ...state,
              word: action.payload
          }
      default:
        return state
    }
}

export default getSearchProductsReducer
