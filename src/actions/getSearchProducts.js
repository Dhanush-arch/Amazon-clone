import { getSearchProducts as GET_SEARCH_PRODUCTS } from "../apiWrapper";

export const getSearchProducts = (search_word) => {
  return (dispatch) => {
    return GET_SEARCH_PRODUCTS(search_word).then((e) => {
      dispatch({
        type: "SET_SEARCH_PRODUCTS",
        payload: {
            word: search_word,
            product: e
        },
      });
    });
  };
};

export const toggleOffSearch = () => {
    return {type:"SET_SEARCH_FALSE", payload:[]}
};

export const setWord = (word) => {
    return {type:"SET_WORD", payload:word}
};
