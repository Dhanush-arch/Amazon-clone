import { getProducts as GET_PRODUCTS } from "../apiWrapper";

const getProducts = () => {
  return (dispatch) => {
    return GET_PRODUCTS(0).then((e) => {
      dispatch({
        type: "SET_PRODUCTS",
        payload: e,
      });
    });
  };
};

export default getProducts;
