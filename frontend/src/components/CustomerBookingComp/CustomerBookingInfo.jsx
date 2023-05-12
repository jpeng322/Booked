import axios from "axios";
import React from "react";

const OrderInfo = ({
  service_type,
  order_desc,
  date_order,
  cost,
  status,
  provider_name,
  id,
}) => {
  async function requestResponse(providerResponse, id) {
    console.log(id);
    try {
      const response = await axios({
        method: "put",
        url: `http://localhost:${import.meta.env.VITE_PORT}/booking/${id}`,
        data: {
          status: providerResponse === "accept" ? "scheduled" : "cancelled",
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="completed-information">
      <div>{provider_name}</div>
      <div>{service_type}</div>
      <div>{order_desc}</div>
      <div>{date_order}</div>
      <div>{cost}</div>

      <div>{status}</div>
      <div>
        {status === "scheduled" && (
          <button onClick={() => requestResponse("cancelled", id)}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderInfo;
