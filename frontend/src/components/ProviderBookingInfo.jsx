import React from "react";
import axios from "axios";
import "../CSS/ProviderBooking.css";
import moment from "moment";
const ProviderBookingInfo = ({
  service_type,
  order_desc,
  order_due,
  date_order,
  cost,
  status,
  client_name,
  id,
  bookings,
  setBookings,
}) => {
  const dateNow = moment().format("L");
  // console.log("COMPARE", dateNow, moment().isAfter("02/11/2023", "day"))

  console.log(moment().isAfter("05/10/2023", "day"));

  function beforeDateNow(date) {
    // console.log(moment().isAfter(date));
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
        url: `http://localhost:4000/booking/${id}`,
        data: {
          status: updatedStatus,
        },
      });

      if (response) {
        const updateBookings = bookings.map((booking) => {
         console.log(booking)
          if (booking.booking_id === id) {
            return {
              ...booking,
              status: updatedStatus,
            };
          } else {
            return booking;
          }
       });
        setBookings(updateBookings)
      }
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="provider-booking-container d-flex p-3">
      <div className="provider-booking flex-grow-1">{client_name}</div>
      <div className="provider-booking flex-grow-1">{service_type}</div>
      <div className="provider-booking  flex-grow-1">{order_desc}</div>
      <div className="provider-booking  flex-grow-1">{date_order}</div>
      {/* <div className="provider-booking flex-grow-1">{order_due}</div> */}
      <div className="provider-booking  flex-grow-1">{cost}</div>
      <div className="provider-booking  flex-grow-1">
        {" "}
        {status === "scheduled" && sameOrAfterDateNow(date_order)
          ? "active"
          : status}
      </div>
      <div className="provider-booking  flex-grow-1">
        {status === "pending" && (
          <>
            <button onClick={() => requestResponse("accept", id)}>
              Accept
            </button>
            <button onClick={() => requestResponse("decline", id)}>
              Decline
            </button>
          </>
        )}
        {status === "scheduled" && sameOrAfterDateNow(date_order) && (
          <button onClick={() => requestResponse("completed", id)}>
            Mark Complete
          </button>
        )}
        {status === "scheduled" && beforeDateNow(date_order) && (
          <button onClick={() => requestResponse("decline", id)}>Cancel</button>
        )}
        {status === "cancelled" && beforeDateNow(date_order) && (
          <button onClick={() => requestResponse("pending", id)}>
            Request Uncancel
          </button>
        )}
      </div>
    </div>
  );
};

export default ProviderBookingInfo;
