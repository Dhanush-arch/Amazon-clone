let initial_state = {
}
const saveDeliveryDetailsReducer = (state=initial_state, action) => {
    switch (action.type) {
      case "SET_DELIVERY_DETAILS":
        return action.payload

      default:
        return state
    }
}

export default saveDeliveryDetailsReducer
