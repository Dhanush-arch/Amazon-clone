import { getCart as GET_CART } from "../apiWrapper";

const getCart = (id) => {
  return (dispatch) => {
      try{
          return GET_CART(id).then((e) => {
            dispatch({
              type: "SET_CART",
              payload: e[0],
            });
          });
      }
      catch(e) {
         
      }
  };
};

export default getCart;
