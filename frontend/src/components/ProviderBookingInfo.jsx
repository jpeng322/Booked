import React, { useState } from "react";
import axios from "axios";
import "../CSS/ProviderBooking.css";
import moment from "moment";

const ProviderBookingInfo = ({
  address,
  address_id,
  service_type,
  order_desc,
  start_date,
  end_date,
  cost,
  status,
  client_name,
  id,
  bookings,
  setBookings,
  setCompletedBookings,
  setScheduledBookings,
  setPendingBookings,
  setCancelledBookings,
}) => {
  const dateNow = moment().format("L");

  const [showDropdown, setShowDropdown] = useState("not-hidden");

  function beforeDateNow(date) {
    return moment().isBefore(date);
  }

  function sameOrAfterDateNow(date) {
    return moment().isAfter(date) || moment().isSame(date, "day");
  }

  async function requestResponse(providerResponse, id) {
    console.log(id);
    const updatedStatus =
      providerResponse === "completed"
        ? "completed"
        : providerResponse === "accept"
        ? "scheduled"
        : "cancelled";
    try {
      const response = await axios({
        method: "put",
        url: `http://localhost:${import.meta.env.VITE_PORT}/booking/${id}`,
        data: {
          status: updatedStatus,
        },
      });

      if (response) {
        const updateBookings = bookings.map((booking) => {
          console.log(booking);
          if (booking.booking_id === id) {
            return {
              ...booking,
              status: updatedStatus,
            };
          } else {
            return booking;
          }
        });
        setBookings(updateBookings);

        setPendingBookings(
          updateBookings.filter((booking) => booking.status === "pending")
        );
        setScheduledBookings(
          updateBookings.filter((booking) => booking.status === "scheduled")
        );
        setCompletedBookings(
          updateBookings.filter((booking) => booking.status === "completed")
        );
      }
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  function openMap(address_id) {
    window.open(`/map/${address_id}`, "_blank", "rel=noopener noreferrer");
  }

  return (
    <div className={"provider-booking-container d-flex flex-column " + status}>
      <div className="d-flex w-100">
        <div className="provider-booking flex-grow-1">{client_name}</div>
        <div className="provider-booking  flex-grow-1 only-large ">
          {address} <span onClick={() => openMap(address_id)}>Link</span>
        </div>
        <div className="provider-booking flex-grow-1">{service_type}</div>
        <div className="provider-booking  flex-grow-1 only-large">
          {order_desc}
        </div>
        <div className="provider-booking  flex-grow-1 only-large">
          {start_date}
        </div>
        <div className="provider-booking  flex-grow-1 only-large">
          {end_date}
        </div>
        {/* <div className="provider-booking flex-grow-1 ">{order_due}</div> */}
        <div className="provider-booking  flex-grow-1">{cost}</div>
        <div className="provider-booking  flex-grow-1 ">
          {" "}
          {status === "scheduled" && sameOrAfterDateNow(start_date)
            ? "active"
            : status}
        </div>
        <div>
          <button
            className="show-button"
            onClick={() =>
              setShowDropdown(
                showDropdown === "not-hidden" ? "hidden" : "not-hidden"
              )
            }
          >
            {showDropdown === "not-hidden" ? "Show Info" : "Close"}
          </button>
        </div>
        <div className="provider-booking  flex-grow-1 d-flex flex-column gap-2 flex-xxl-row">
          {status === "pending" && (
            <>
              <button
                className="accept-button"
                onClick={() => {
                  requestResponse("accept", id);
                }}
              >
                Accept
              </button>
              <button
                className="decline-button"
                onClick={() => requestResponse("decline", id)}
              >
                Decline
              </button>
            </>
          )}
          {status === "scheduled" && sameOrAfterDateNow(start_date) && (
            <button
              className="complete-button"
              onClick={() => {
                requestResponse("completed", id);
              }}
            >
              Completed
            </button>
          )}
          {status === "scheduled" && beforeDateNow(start_date) && (
            <button
              className="cancel-button"
              onClick={() => requestResponse("decline", id)}
            >
              Cancel
            </button>
          )}
          {/* {status === "cancelled" && beforeDateNow(start_date) && (
          <button onClick={() => requestResponse("pending", id)}>
            Request Uncancel
          </button>
        )} */}
        </div>
      </div>
      {showDropdown === "hidden" && (
        <div className="provider-dropdown-info">
          <div>Address: {address}</div>
          <div>Description : {order_desc}</div>
          <div>Book Date: {start_date}</div>
          <div>Due Date: {end_date}</div>
        </div>
      )}
    </div>
  );
};

export default ProviderBookingInfo;
