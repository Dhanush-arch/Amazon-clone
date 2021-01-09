let initial_state = {
    cart : []
}
const getCartReducer = (state=initial_state, action) => {
    switch (action.type) {
      case "SET_CART":
        return action.payload
      case "ERASE_CART":
        return {
            cart : []
        }
      default:
        return state
    }
}

export default getCartReducer
