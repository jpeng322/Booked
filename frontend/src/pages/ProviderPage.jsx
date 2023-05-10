import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//styling
import avatar from "../images/avatar.png";
import "../CSS/ProviderProfile.css";
const ProviderPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Container fluid className="provider-profile-container d-flex p-5">
      <div className="provider-information">
        <div className="provider-bio">
          <div className="provider-header">
            <img src={avatar} alt="asdasd" />
            <div className="provider-media">
              <h2>GR Brothers Landscaping</h2>
              <h3>Super stars</h3>
              <button>Share</button>
            </div>
          </div>
          <div className="provider-about">
            <span className="fw-bold">About:</span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatibus similique sint harum at
            sequi quam excepturi quidem cumque doloribus officia! Dolorem quo
            adipisci quaerat facere nesciunt voluptatibus perspiciatis nam
            veniam.
          </div>
        </div>
        <div className="provider-stats">
          <div className="provider-overview">
            <div>
              <span className="fw-bold">Overview</span>
            </div>
            <div>Pro</div>
            <div>
              Hired <span className="fw-bold">66</span> times
            </div>
            <div>
              Serves <span className="fw-bold">Los Angeles, CA</span>{" "}
            </div>
            <div>
              Background <span className="fw-bold">checked</span>
            </div>
            <div>
              <span className="fw-bold">4</span> employees
            </div>
            <div>
              <span className="fw-bold">2</span> years in business
            </div>
          </div>
          <div className="provider-payments">
            <div>
              <span className="fw-bold">Payments</span>
            </div>
            <div>Cash</div>
            <div>CashApp</div>
            <div>Venmo</div>
            <div>Zelle</div>
            <div>ApplePay</div>
          </div>
        </div>
        <div className="provider-photos">
          <h3>Featured Project Photos</h3>
          <div>30 photos</div>

          {/* <div className="provider-photos-container"> */}

          {/* </div> */}
          <Carousel responsive={responsive}>
            <img src={avatar} alt="" />
            <img src={avatar} alt="" />
            <img src={avatar} alt="" />
            <img src={avatar} alt="" />
            <img src={avatar} alt="" />
            <img src={avatar} alt="" />
            <img src={avatar} alt="" />
          </Carousel>
        </div>

        <div className="provider-services">
          <form action="/action_page.php">
            <input type="checkbox" name="vehicle1" value="Bike" />
            <label for="vehicle1"> I have a bike</label>
            <input type="checkbox" name="vehicle2" value="Car" />
            <label for="vehicle2"> I have a car</label>
            <input type="checkbox" name="vehicle3" value="Boat" />
            <label for="vehicle3"> I have a boat</label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>

      <Row className="provider-form-container">
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
            <label for="scheduling">Service Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="provider-input-group">
            <label for="project">Service Type</label>
            <input type="text" id="project" name="project" placeholder="What service would you like?" />
          </div>
          <div className="provider-input-group">
            <label htmlFor="note">Message </label>
            <textarea
              className="p-3"
              name="note"
              id="note"
              cols="30"
              rows="4"
              placeholder="Any additional information that the provider needs to know? Ex. Anticipated duration of service, notice of pets, specific information needed to know for better service"
            ></textarea>
          </div>
          {/* <div className="provider-input-group">
            <label for="hours">Estimated Hours</label>
            <input type="number" id="hours" name="hours" />
          </div> */}

          <button className="provider-form-button">Send Request</button>
          <p>
            Responds in about <span className="fw-bold">1 hour</span>
          </p>
        </form>
      </Row>
    </Container>
  );
};

export default ProviderPage;
