import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button, Modal } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import dateFormat from "dateformat";
import getDay from "date-fns/getDay";
import {
  Form,
  redirect,
  useActionData,
  useNavigate,
  useSubmit,
} from "react-router-dom";

//components
import RequestFormModal from "../components/RequestFormModal";
//styling
import avatar from "../images/avatar.png";
import "../CSS/ProviderProfile.css";

export const submitRequestForm = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    service_type: data.get("service_type"),
    zip_code: data.get("zip_code"),
    message: data.get("message"),
    start_date: data.get("start_date"),
    end_date: data.get("end_date"),
  };

  // return redirect("/customer/confirmation");

  return submission;
};

const ProviderPage = ({ setFormData }) => {
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

  const [modalShow, setModalShow] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // useEffect(() => {
  //   setEndDate(startDate);
  // }, [startDate]);

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const filterBeforeDate = (date, initialDate) => {
    const selectedStartDate = new Date(date);
    return selectedStartDate.getTime() + 86400000 > initialDate.getTime();
  };

  const data = useActionData();
  console.log(data);
  let submit = useSubmit();
  async function sendFormData() {
    try {
      const response = await axios({
        method: "post",
        url: `http://localhost:${import.meta.env.VITE_PORT}/booking`,
        data: {
          client_name: "mei",
          provider_name: "john",
          service_type: data.service_type,
          start_date: dateFormat(new Date(startDate), "mmmm d, yyyy h:MM TT"),
          end_date: dateFormat(new Date(endDate), "mmmm d, yyyy h:MM TT"),
          message: data.message,
          cost: "150",
        },
      });
      console.log(response);
      if (response) {
        // window.open(`/customer/confirmation/${client_name}/${provider_name}/${start_date}/${end_date}}`,'_blank', 'rel=noopener noreferrer')
        setFormData({
          client_name: "mei",
          provider_name: "john",
          service_type: data.service_type,
          start_date: dateFormat(new Date(startDate), "mmmm d, yyyy h:MM TT"),
          end_date: dateFormat(new Date(endDate), "mmmm d, yyyy h:MM TT"),
          message: data.message,
          cost: "150",
        });

        const booking_id = response.data.booking_info.booking_id;
        window.open(
          `/customer/confirmation/${booking_id}`,
          "_blank",
          "rel=noopener noreferrer"
        );

        setModalShow(true);
        // return data;

        console.log(response);

      } else {
        throw Error("No response");
      }
    } catch (e) {
      console.log(e);
    }
  }

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
      </div>

      <Row className="provider-form-container">
        <Form
          onChange={(event) => {
            submit(event.currentTarget);
          }}
          className="provider-form"
          method="post"
          action="/provider/profile"
        >
          <div className="provider-pricing">
            <h2>$150</h2>
            <h3>Starting cost</h3>
          </div>
          <div className="provider-input-group">
            <label for="zip_code">Zip Code</label>
            <input
              type="text"
              placeholder="Zip Code"
              title="Please enter a Zip Code"
              pattern="^\s*?\d{5}(?:[-\s]\d{4})?\s*?$"
            />
          </div>
          <div className="provider-input-group">
            <label for="scheduling">Order Date</label>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              filterDate={(date) => filterBeforeDate(date, new Date())}
              filterTime={(time) => filterPassedTime(time, new Date())}
              // filterTime={filterPassedTime}
              dateFormat="MMMM d, yyyy h:mm aa"
              name="start_date"
              timeIntervals={60}
              placeholderText="Please select a start date."
            />

            {startDate && (
              <>
                <label for="scheduling">Due On</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  showTimeSelect
                  filterDate={(date) =>
                    filterBeforeDate(date, new Date(startDate))
                  }
                  filterTime={(time) =>
                    filterPassedTime(time, new Date(startDate))
                  }
                  // filterTime={filterPassedTime}
                  dateFormat="MMMM d, yyyy h:mm a"
                  name="end_date"
                  timeIntervals={60}
                  placeholderText="Please select an end date."
                />
              </>
            )}
          </div>
          <div className="provider-input-group">
            <label for="service_type">Service Type</label>
            <input
              type="text"
              id="service_type"
              name="service_type"
              placeholder="What service would you like?"
            />
          </div>
          <div className="provider-input-group">
            <label htmlFor="message">Message </label>
            <textarea
              className="p-3"
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Any additional information that the provider needs to know? Ex. Anticipated duration of service, notice of pets, specific information needed to know for better service"
            ></textarea>
          </div>
          <button className="provider-form-button" onClick={sendFormData}>
            Send Request
          </button>
          {/* <button type="submit" className="provider-form-button">
            Send Request
          </button> */}

          <p>
            Responds in about <span className="fw-bold">1 hour</span>
          </p>
        </Form>
      </Row>
      {/* <RequestFormModal
        formData={data}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      /> */}
    </Container>
  );
};

export default ProviderPage;
