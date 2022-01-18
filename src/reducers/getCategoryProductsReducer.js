let initial_state = {
    products : []
}
const getCategoryProductsReducer = (state=initial_state, action) => {
    switch (action.type) {
      case "SET_CATEGORY_PRODUCTS":
        return {
            ...state,
            products: action.payload
        }
      default:
        return state
    }
}

export default getCategoryProductsReducer
