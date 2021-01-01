let initial_state = {
    userID : null,
    userToken: null,
    userEmail: null,
    isLoggedIn: false,
}
const userCredReducer = (state=initial_state, action) => {
    switch (action.type) {
        case "SET_ID":
            return {
                ...state,
                userID : action.payload
            }
        case "SET_TOKEN":
            return {
                ...state,
                userEmail : action.payload.email,
                isLoggedIn : action.payload.isLoggedIn,
                userToken : action.payload.token
            }
        default:
            return state
    }
}

export default userCredReducer
