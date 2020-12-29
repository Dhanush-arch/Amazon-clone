import React from 'react'
import "./CheckOut.css"

function CheckOut() {
    return (
      <div >
        <div class="form-style-5">
          <form>
          <legend>Delivery Details</legend>
          <input type="text" name="name" placeholder="Your Name *"/>
          <input type="number" name="number" placeholder="Your Number *"/>
          <input type="text" name="address1" placeholder="Your Address Line No.1 *"/>
          <input type="text" name="address2" placeholder="Your Address Line No.2"/>
          <input type="text" name="city" placeholder="Your City *"/>
          <input type="text" name="State" placeholder="Your State *"/>
          <input type="text" name="zipcode" placeholder="Your Zip Code *"/>
          <input className="submit__btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>


    )
}

export default CheckOut
