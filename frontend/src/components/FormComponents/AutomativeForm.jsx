import React, { useState } from "react";
import DatePicker from "react-datepicker";

const AutomativeForm = () => {
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
          placeholder="Change Oil Filter"
        />
      </div>
      <div className="provider-input-group">
        <label for="vehicle">Vehicle</label>
        <div className="d-flex gap-3 flex-row text-center ">
          <input
            className="text-center"
            type="number"
            id="vehicle-year"
            name="vehicle-year"
            placeholder="2002"
            maxLength={4}
          />

          <input
            className="text-center"
            type="text"
            id="vehicle-brand"
            name="vehicle-brand"
            placeholder="Toyota"
          />
          <input
            className="text-center"
            type="text"
            id="vehicle-model"
            name="vehicle-model"
            placeholder="Camry"
          />
        </div>
      </div>
      <div className="provider-input-group">
        <label htmlFor="note">Add Note for Mechanic (300 characters)</label>
              <textarea
                  className="p-3"
          name="note"
          id="note"
          cols="35"
          rows="8"
          placeholder="I have an oil leak..."
        ></textarea>
      </div>
      <div className="provider-input-group">
        <label for="scheduling">Select Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      
      <button className="provider-form-button p-3">Request a quote</button>
      <p className="mt-5 mb-3">
        Responds in about <span className="fw-bold">1 hour</span>
      </p>
    </form>
  );
};

export default AutomativeForm;
