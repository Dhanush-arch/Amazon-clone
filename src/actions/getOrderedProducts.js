import { getOrderedProducts as GET_ORDERED_PRODUCTS } from "../apiWrapper";

const getOrderedProducts = (user_id) => {
  return (dispatch) => {
      try{
          return GET_ORDERED_PRODUCTS(user_id).then((e) => {
            dispatch({
              type: "SET_ORDERED_PRODUCTS",
              payload: e,
            });
          });
      }
      catch(e) {

      }
  };
};

export default getOrderedProducts;
