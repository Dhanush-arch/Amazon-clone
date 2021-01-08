import React, {useState}  from 'react'
import "./DeliveryDetails.css"
import {useSelector, useDispatch} from 'react-redux'
import saveDeliveryDetails from '../actions/saveDeliveryDetails';
import {useHistory} from 'react-router-dom';

function CheckOut() {
    const save_details = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [add1, setAdd1] = useState("");
    const [add2, setAdd2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      save_details(saveDeliveryDetails(name, number, add1, add2, city, state, zip))
      history.push('/checkout')
  }

    return (
      <div >
        <div class="form-style-5">
          <form onSubmit={handleSubmit} >
          <legend>Delivery Details</legend>
          <input required type="text" name="name" value={name} onChange={e => setName(e.target.value)}  placeholder="Your Name *"/>
          <input required type="number" name="number" value={number} onChange={e => setNumber(e.target.value)} placeholder="Your Number *"/>
          <input required type="text" name="address1" value={add1} onChange={e => setAdd1(e.target.value)} placeholder="Your Address Line No.1 *"/>
          <input type="text" name="address2" value={add2} onChange={e => setAdd2(e.target.value)} placeholder="Your Address Line No.2"/>
          <input required type="text" name="city" value={city} onChange={e => setCity(e.target.value)} placeholder="Your City *"/>
          <input required type="text" name="State" value={state} onChange={e => setState(e.target.value)} placeholder="Your State *"/>
          <input required type="text" name="zipcode" value={zip} onChange={e => setZip(e.target.value)} placeholder="Your Zip Code *"/>
          <input className="submit__btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>


    )
}

export default CheckOut
