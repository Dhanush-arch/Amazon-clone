let initial_state = {
    cart : []
}
const getCartReducer = (state=initial_state, action) => {
    switch (action.type) {
      case "SET_CART":
        return action.payload
      default:
        return state
    }
}

export default getCartReducer
