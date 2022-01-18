import { getCart as GET_CART } from "../apiWrapper";

const getCart = (id) => {
  return (dispatch) => {
      try{
          return GET_CART(id).then((e) => {
            if(e.length > 0) {
                e = e[0]
            }
            dispatch({
              type: "SET_CART",
              payload: e,
            });
          });
      }
      catch(e) {

      }
  };
};

export default getCart;
