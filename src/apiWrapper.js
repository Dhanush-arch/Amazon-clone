import axios from "axios";

const base_url = "https://dhanusharch.pythonanywhere.com/api/v1";

let _token;

export const login = (user_name, password) => {
  return axios
    .post(base_url + `/rest-auth/login/`, {
      username: user_name,
      email: user_name,
      password: password,
    })
    .then((e) => {
        console.log(_token)
      _token = e.data.key;
      console.log(_token)
      return e.data.key;
    });
};

export const logout = () => {
  /** returns 200 if logout is successful */

  return axios
    .post(base_url + `/rest-auth/logout/`, {
      headers: {
        Authorization: `token ${_token}`,
      },
    })
    .then((e) => {
      console.log(e.status);
      return e;
    });
};

export const register = (user_name, password1, password2) => {
  /** returns 201 and token key if registeration is successful */

  return axios
    .post(base_url + `/rest-auth/registration/`, {
      username: user_name,
      email: user_name,
      password1: password1,
      password2: password2,
    })
    .then((e) => {
      _token = e.data.key;
      return { status: e.status, key: e.data.key };
    });
};

export const getProducts = (id) => {
  /** Returns all the products if id=0 and
   *  Returns the specific product based on the product ID */
  return axios.get(base_url + `/products/${id}/`).then((e) => {
    return e.data;
  });
};

export const getCart = (id) => {
  /** Returns the specific Cart based on the User ID */
  if (_token) {
    return axios
      .get(base_url + `/cart/${id}/`, {
        headers: {
          Authorization: `token ${_token}`,
        },
      })
      .then((e) => {
        return e.data;
      });
  } else {
    return 0;
  }
};

export const getCategory = () => {
  return axios.get(base_url + `/category/`).then((e) => {
    return e.data;
  });
};

export const addToCart = (user_id, product_id) => {
  /** Return String "yes" if add to cart is successfull */
  if (_token) {
    return axios
      .post(
        base_url + "/add-to-cart/",
        { user: user_id, productId: product_id },
        {
          headers: {
            Authorization: `token ${_token}`,
          },
        }
      )
      .then((e) => {
        return e.data;
      });
  }
};

export const deleteFromCart = (user_id, product_id, cart_id) => {
  if (_token) {
    return axios
      .delete(
        base_url + `/delete-from-cart/${product_id}/${cart_id}/${user_id}/`,
        {
          headers: {
            Authorization: `token ${_token}`,
          },
        }
      )
      .then((e) => {
        return e;
      });
  }
};

export const decreaseFromCart = (user_id, products_id, cart_id) => {
  if (_token) {
    return axios
      .put(
        base_url + `/decrease-from-cart/${products_id}/${cart_id}/${user_id}/`,

         { headers: {
            Authorization: `token ${_token}`,
          },}

      )
      .then((e) => {
        return e;
      });
  }
};

export const getUserId = () => {
    if (_token) {
        return axios.post(base_url + `/getuserid/`, {
        headers: {
            'Content-Type': 'application/json',
           Authorization: `token ${_token}`,
         }
     }).then((e) => {
         return e.data[0].user;
     });
    }
};

export const getCartProducts = (products) => {
    if(_token) {
        return axios.get(base_url + `/get-cart-products/?products=${products}`, {
        headers: {
            'Content-Type': 'application/json',
           Authorization: `token ${_token}`,
         }
     }).then((e) => {
         console.log(e.data)
            return e.data;
        })
    }
}

export const getPaymentDetail = (amnt) => {
    if(_token) {
        return axios.post(base_url + `/payment/`,
        { amount:amnt },
        { headers: {
                'Content-Type': 'application/json',
               Authorization: `token ${_token}`,
            }}).then((e) => {
            console.log(e)
            return e;
        })
    }
}

export const checkPaymentStatus = (cart_id, razorpay_payment_id, razorpay_order_id, razorpay_signature) => {
    if(_token) {
        return axios.post(base_url + `/check-payment/`,
        { cartID: cart_id,razorpay_payment_id:razorpay_payment_id, razorpay_order_id:razorpay_order_id, razorpay_signature:razorpay_signature},
        { headers: {
                'Content-Type': 'application/json',
               Authorization: `token ${_token}`,
            }}).then((e) => {
            console.log(e)
            return e;
        })
    }
}

export const getOrderedProducts = (user_id) => {
    if(_token) {
        return axios.get(base_url + `/get-ordered-products/${user_id}/`,
        { headers: {
                'Content-Type': 'application/json',
               Authorization: `token ${_token}`,
            }}).then((e) => {
            console.log(e.data)
            return e.data;
        })
    }
}

export const getSearchProducts = (search_word) => {
  return axios.get(base_url + `/products/0/?search=${search_word}`).then((e) => {
    return e.data;
  });
};

export const setCOD = (cart_id) => {
    if(_token) {
        return axios.post(base_url + `/set-cod/`,
        {cartID: cart_id}    ,
        { headers: {
                'Content-Type': 'application/json',
               Authorization: `token ${_token}`,
            }}).then((e) => {
            console.log(e)
            return e;
        })
    }
}

export const getCategoryProducts = (search_word) => {
    return axios.get(base_url + `/category-products/${search_word}/`).then((e) => {
      return e.data;
    });
}
