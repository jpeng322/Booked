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
  booking,
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
console.log(booking)
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
        url: `${import.meta.env.VITE_PORT}/booking/${id}`,
        data: {
          status: updatedStatus,
        },
      });

      if (response) {
        const updateBookings = bookings.map((booking) => {
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
        <div className="provider-booking">{booking.client_name}</div>
        <div className="provider-booking  ">
          {booking.address}{" "}
          <span onClick={() => openMap(booking.address_id)}>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="map-pin"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </span>
        </div>
        <div className="provider-booking ">{booking.service_type}</div>
        <div className="provider-booking  only-large">{booking.order_desc}</div>
        <div className="provider-booking   only-large">{booking.start_date}</div>
        <div className="provider-booking  only-large">{booking.end_date}</div>
        {/* <div className="provider-booking flex-grow-1 ">{order_due}</div> */}
        <div className="provider-booking ">${booking.cost}</div>
        <div className="provider-booking   ">
          {" "}
          {booking.status === "scheduled" && sameOrAfterDateNow(booking.start_date)
            ? "active"
            : booking.status}
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
            {showDropdown === "not-hidden" ? "Show Additional Info" : "Close"}
          </button>
        </div>
        <div className="provider-booking  gap-2 flex-column flex-md-row only-large ">
          {booking.status === "pending" && (
            <>
              <button
                className="accept-button"
                onClick={() => {
                  requestResponse("accept", booking.booking_id);
                }}
              >
                Accept
              </button>
              <button
                className="decline-button"
                onClick={() => requestResponse("decline", booking.booking_id)}
              >
                Decline
              </button>
            </>
          )}
          {booking.status === "scheduled" && sameOrAfterDateNow(booking.start_date) && (
            <button
              className="complete-button"
              onClick={() => {
                requestResponse("completed", booking.booking_id);
              }}
            >
              Completed
            </button>
          )}
          {booking.status === "scheduled" && beforeDateNow(booking.start_date) && (
            <button
              className="cancel-button"
              onClick={() => requestResponse("decline", booking.booking_id)}
            >
              Cancel
            </button>
          )}
          {/* {status === "cancelled" && beforeDateNow(start_date) && (
          <button onClick={() => requestResponse("pendingbooking.",_id)}>
            Request Uncancel
          </button>
        )} */}
        </div>
      </div>
      {showDropdown === "hidden" && (
        <div className="provider-dropdown-info">
          <div>
            <span className="fw-bold me-1">Description:</span> {booking.order_desc}
          </div>
          <div>
            <span className="fw-bold me-1">Book Date:</span> {booking.start_date}
          </div>
          <div>
            <span className="fw-bold me-1">Due Date:</span> {booking.end_date}
          </div>
          <div className="provider-booking d-flex gap-2 only-large">
            {status === "pending" && (
              <>
                <button
                  className="accept-button"
                  onClick={() => {
                    requestResponse("accept", booking.booking_id);
                  }}
                >
                  Accept
                </button>
                <button
                  className="decline-button"
                  onClick={() => requestResponse("decline", booking.booking_id)}
                >
                  Decline
                </button>
              </>
            )}
            {booking.status === "scheduled" && sameOrAfterDateNow(booking.start_date) && (
              <button
                className="complete-button"
                onClick={() => {
                  requestResponse("completed", booking.booking_id);
                }}
              >
                Completed
              </button>
            )}
            {status === "scheduled" && beforeDateNow(booking.start_date) && (
              <button
                className="cancel-button"
                onClick={() => requestResponse("decline", booking.booking_id)}
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
      )}
    </div>
  );
};

export default ProviderBookingInfo;
