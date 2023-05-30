import React, { useState } from "react";
import DatePicker from "react-datepicker";
const HomeLandscapeDesignForm= () => {
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
        <label for="service-type">Project Type</label>
        <input
          type="text"
          id="project-type"
          name="project-type"
          placeholder="Bathroom remodel"
        />
      </div>
      <div className="provider-input-group">
        <label htmlFor="note">Project scope(300 characters)</label>
        <textarea
          className="p-3"
          name="note"
          id="note"
          cols="35"
          rows="8"
          placeholder="I would like to replace my bathtub..."
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

export default HomeLandscapeDesignForm;
