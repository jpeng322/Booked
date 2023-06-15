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
  useLoaderData,
  useParams,
} from "react-router-dom";

import { getProviderInfo } from "../api";

import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

//components
import RequestFormModal from "../components/RequestFormModal";
import GooglePlacesComp from "../components/GooglePlacesAutocomplete";

//styling
import avatar from "../images/avatar.png";
import "../CSS/ProviderProfile.css";

import Autocomplete from "react-google-autocomplete";
// import { geocodeByPlaceId } from 'react-google-places-autocomplete';

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

const ProviderPage = () => {
  let { id } = useParams();
  const loaderData = useLoaderData();

  const [providerInfo, setProviderInfo] = useState(loaderData);
  console.log(providerInfo);
  const [checkedState, setCheckedState] = useState(
    new Array(providerInfo.services.length).fill(false)
  );

  const providerServices = providerInfo.services;

  const [total, setTotal] = useState(0);
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + providerServices[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };
  const listOfServices = providerInfo.services.map((service, index) => (
    <div className="service-checkbox-container" key={service.service_id}>
      <label
        className="service-label"
        for={`provider-${service.provider_id}-${service.service_type}`}
      >
        <input
          className="service-checkbox"
          type="checkbox"
          id={`provider-${service.provider_id}-${service.service_type}`}
          name={service.service_type}
          value={service.price}
          checked={checkedState[index]}
          onChange={() => handleOnChange(index)}
        />
        <span className="checkmark"></span> <div>{service.service_type}</div>
        <span className="service-price">${service.price}</span>
      </label>
    </div>
  ));

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
  const [address, setAddress] = useState("");

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const filterBeforeDate = (date, initialDate) => {
    const selectedStartDate = new Date(date);
    return selectedStartDate.getTime() + 86400000 > initialDate.getTime();
  };
  const arrayOfServiceTypes = providerInfo.services.map(
    (service) => service.service_type
  );
  const stringOfServiceTypes = JSON.stringify(arrayOfServiceTypes)
    .replace(/[\[\]"']+/g, "")
    .replaceAll(",", ", ");
  const data = useActionData();
  let submit = useSubmit();
  async function sendFormData() {
    try {
      const response = await axios({
        method: "post",
        url: `http://localhost:${import.meta.env.VITE_PORT}/booking`,
        data: {
          client_name: "jac",
          client_id: localStorage.getItem(userId) || 1,
          provider_id: providerInfo.provider.provider_id,
          provider_name: providerInfo.provider.provider_fname,
          service_type: stringOfServiceTypes,
          start_date: dateFormat(new Date(startDate), "mmmm d, yyyy h:MM TT"),
          end_date: dateFormat(new Date(endDate), "mmmm d, yyyy h:MM TT"),
          message: data.message,
          cost: total.toString(),
          address: address.label,
          address_id: address.value.place_id,
        },
      });

      if (response) {
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
              <h2>{providerInfo.provider.provider_businessName}</h2>
              {/* <h3>Super stars</h3> */}
              <button>Share</button>
            </div>
          </div>
          {/* <div className="provider-about">
            <span className="fw-bold">About:</span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatibus similique sint harum at
            sequi quam excepturi quidem cumque doloribus officia! Dolorem quo
            adipisci quaerat facere nesciunt voluptatibus perspiciatis nam
            veniam.
          </div> */}
        </div>
        <div className="provider-stats">
          <div className="provider-overview">
            <div>
              <span className="fw-bold">Overview</span>
            </div>
            <div>Pro</div>
            <div>
              Booked <span className="fw-bold">{providerInfo.timesBooked}</span>{" "}
              time{providerInfo.timesBooked !== 1 && "s"}
            </div>
            <div>
              Serves <span className="fw-bold">{providerInfo.provider.provider_areaServed}</span>{" "}
            </div>
            {providerInfo.provider.provider_standing === "true" && (
              <div>
                Background <span className="fw-bold">checked</span>
              </div>
            )}
            <div>
              <span className="fw-bold">
                {providerInfo.provider.provider_amountOfEmployees}
              </span>{" "}
              employees
            </div>
            <div>
              <span className="fw-bold">
                {providerInfo.provider.provider_yearsInBusiness}
              </span>{" "}
              years in business
            </div>
          </div>
          <div className="provider-payments">
            <div>
              <span className="fw-bold">Payments</span>
            </div>
            {console.log(providerInfo.provider.provider_payment_methods.split(","))}
            {providerInfo.provider.provider_payment_methods.split(",").map(payment_method => <div className="text-capitalize">{payment_method}</div>)}
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
          action={`/provider/profile/${localStorage.getItem("userId")}`}
          // action={`/provider/profile/:id`}
        >
          <div className="provider-pricing">
            <h2>$150</h2>
            <h3>Starting cost</h3>
          </div>

          <div className="provider-input-group">
            <label for="address">Address</label>
            <GooglePlacesComp address={address} setAddress={setAddress} />
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
            {/* <input
              type="text"
              id="service_type"
              name="service_type"
              placeholder="What service would you like?"
            /> */}
            {listOfServices}
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
            Responds{" "}
            {providerInfo.provider.provider_response === "1-3 hours" ||
              (providerInfo.provider.provider_response === "3-7 hours" &&
                "in about ")}
            <span className="fw-bold text-lowercase">
              {providerInfo.provider.provider_response}
            </span>
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
