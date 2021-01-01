let initial_state = {
    products : []
}
const getProductReducer = (state=initial_state, action) => {
    switch (action.type) {
      case "SET_PRODUCTS":
        return action.payload
      default:
        return state
    }
}

export default getProductReducer
