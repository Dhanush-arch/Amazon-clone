import {combineReducers} from 'redux'
import getProductReducer from './getProductReducer'
import getCartReducer from './getCartReducer'
import userCredReducer from './userCredReducer'

const rootReducer = combineReducers({user:userCredReducer, products:getProductReducer, cart:getCartReducer})

export default rootReducer;
