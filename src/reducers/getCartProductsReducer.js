let initial_state = {
    products : []
}
const getCartProductsReducer = (state=initial_state, action) => {
    switch (action.type) {
      case "SET_CART_PRODUCTS":
        return {
            ...state,
            products: action.payload
        }
      default:
        return state
    }
}

export default getCartProductsReducer
