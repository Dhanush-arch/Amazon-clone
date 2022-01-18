const saveDeliveryDetails = (name, num, add1, add2, city, state, zip) => {
  return {type:"SET_DELIVERY_DETAILS", payload:{name, num, add1, add2, city, state, zip}}
};

export default saveDeliveryDetails;
