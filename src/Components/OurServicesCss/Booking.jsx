import React from "react";

export default function Booking() {
  return (
    <div id="booking" className="booking">
      <form className="booking-form" onSubmit={(e)=>e.preventDefault()}>
        <div className="row">
          <input placeholder="Your name" required />
          <input placeholder="Phone or email" required />
        </div>
        <div className="row">
          <select defaultValue="">
            <option value="" disabled>Select service</option>
            <option>Facial</option>
            <option>Waxing</option>
            <option>Threading</option>
          </select>
          <input type="date" />
        </div>
        <button className="btn btn-primary">Request Booking</button>
      </form>
    </div>
  );
}
