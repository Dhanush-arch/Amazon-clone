import {combineReducers} from 'redux'
import getProductReducer from './getProductReducer'
import getCartReducer from './getCartReducer'
import userCredReducer from './userCredReducer'
import getCartProductsReducer from './getCartProductsReducer'
import saveDeliveryDetailsReducer from './saveDeliveryDetailsReducer'
import getOrderedProductsReducer from './getOrderedProductsReducer'
import getSearchProductsReducer from './getSearchProductsReducer'

const rootReducer = combineReducers({
    user:userCredReducer,
    products:getProductReducer,
    cart:getCartReducer,
    cart_products:getCartProductsReducer,
    delivery_details:saveDeliveryDetailsReducer,
    ordered_products:getOrderedProductsReducer,
    search:getSearchProductsReducer
})

export default rootReducer;
