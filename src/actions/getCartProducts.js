import { getCartProducts as GET_CART_PRODUCTS } from "../apiWrapper";

const getCartProducts = (products) => {
  return (dispatch) => {
      try{
          return GET_CART_PRODUCTS(products).then((e) => {
            dispatch({
              type: "SET_CART_PRODUCTS",
              payload: e,
            });
          });
      }
      catch(e) {

      }
  };
};

export default getCartProducts;
