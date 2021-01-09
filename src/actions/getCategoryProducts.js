import { getCategoryProducts as GET_CATEGORY_PRODUCTS } from "../apiWrapper";

const getCategoryProducts = (word) => {
  return (dispatch) => {
      try{
          return GET_CATEGORY_PRODUCTS(word).then((e) => {
            dispatch({
              type: "SET_CATEGORY_PRODUCTS",
              payload: e,
            });
          });
      }
      catch(e) {

      }
  };
};

export default getCategoryProducts;
