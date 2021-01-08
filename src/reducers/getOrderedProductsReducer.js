let initial_state = {
    products : []
}
const getOrderedProductsReducer = (state=initial_state, action) => {
    switch (action.type) {
      case "SET_ORDERED_PRODUCTS":
        return {
            ...state,
            products: action.payload
        }
      default:
        return state
    }
}

export default getOrderedProductsReducer
