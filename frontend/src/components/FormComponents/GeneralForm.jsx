import React from 'react'

const GeneralForm = () => {
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
      <label for="scheduling">Scheduling</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
    <div className="provider-input-group">
      <label for="hours">Estimated Hours</label>
      <input type="number" id="hours" name="hours" />
    </div>
    <div className="provider-input-group">
      <label for="project">Project Type</label>
      <input type="text" id="project" name="project" />
    </div>
    <button className="provider-form-button">Check availability</button>
    <p>
      Responds in about <span className="fw-bold">1 hour</span>
    </p>
  </form>
  )
}

export default GeneralForm