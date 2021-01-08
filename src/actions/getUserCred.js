import { login as LOGIN, getUserId, logout as LOGOUT } from "../apiWrapper";

export const login = (username, password) => {
    return (dispatch) => {
        return LOGIN(username, password).then((e) => {
            dispatch({
                type: "SET_TOKEN",
                payload : {
                    email : username,
                    isLoggedIn : true,
                    token : e
                }
            })
        })
    }
}

export const getId = () => {
    return (dispatch) => {
        return getUserId().then((e) => {
            console.log(e)
            dispatch({
                type : "SET_ID" ,
                payload : parseInt(e)
            })
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        return LOGOUT().then((e) => {
            dispatch({
                type: "LOGOUT"
            })
        })
    }
}
