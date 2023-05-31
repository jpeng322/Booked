import React, { useState } from "react";
import DatePicker from "react-datepicker";
const PetcareForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <form className="provider-form">
      <div className="provider-pricing">
        <h2>$150</h2>
        <h3>Starting cost</h3>
      </div>
      <div className="provider-input-group">
        <label for="zip-code">Zip Code</label>
        <input type="number" id="zip-code" name="zip-code" />
      </div>
      <div className="provider-input-group">
        <label for="service-type">Service Type</label>
        <input
          type="text"
          id="service-type"
          name="service-type"
          placeholder="Petting sitting"
        />
      </div>
      <div className="provider-input-group">
        <label for="service-length">Service Length</label>
        <input
          type="text"
          id="service-length"
          name="service-length"
          placeholder="1 hour"
        />
      </div>
      <div className="provider-input-group">
        <label for="scheduling">Select Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <button className="provider-form-button p-3">Book</button>
      <p className="mt-5 mb-3">
        Responds in about <span className="fw-bold">1 hour</span>
      </p>
    </form>
  );
};

export default PetcareForm;
