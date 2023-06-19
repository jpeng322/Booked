import axios from "axios";
import React, { useState } from "react";

const OrderInfo = ({
  service_type,
  order_desc,
  start_date,
  end_date,
  cost,
  status,
  provider_pic,
  id,
}) => {
  async function requestResponse(providerResponse, id) {
    console.log(id);
    try {
      const response = await axios({
        method: "put",
        url: `${import.meta.env.VITE_PORT}/booking/${id}`,
        data: {
          status: providerResponse === "accept" ? "scheduled" : "cancelled",
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  return (
    <div className="completed-information d-flex flex-column">
      <div className="completed-information-main">
        <div className="provider-image-container">
          {" "}
          <img src={provider_pic} className="provider-image" />
        </div>
        <div className="display-status-sm service-type">{service_type}</div>
        <div>{order_desc}</div>
        <div className="display-status">{start_date}</div>
        <div className="display-status">{end_date}</div>
        <div className="display-status">${cost}.00</div>

        <div className="status">{status}</div>
        <div className="display-status">
          {status === "scheduled" && (
            <button onClick={() => requestResponse("cancelled", id)}>
              Cancel
            </button>
          )}
        </div>
        <div
          onClick={() =>
            setShowAdditionalInfo(showAdditionalInfo ? false : true)
          }
          className="show-additional-info"
        >
          {showAdditionalInfo
            ? "Hide Additional Info"
            : "Show Additional Information"}
        </div>
      </div>
      {showAdditionalInfo && (
        <div className="additional-info">
          <div className="display-status-sm-additional ">
            <span className="fw-bold ">Business Type:</span>{" "}
            <span className="text-capitalize">{service_type}</span>
          </div>
          <div className="">
            <span className="fw-bold">Order Date:</span> {start_date}
          </div>
          <div className="">
            <span className="fw-bold">Due On:</span> {end_date}
          </div>
          <div className="">
            <span className="fw-bold">Price:</span> ${cost}.00
          </div>
          <div className="">
            {status === "scheduled" && (
              <button onClick={() => requestResponse("cancelled", id)}>
                Cancel
              </button>
            )}{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderInfo;
