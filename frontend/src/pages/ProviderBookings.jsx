import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const ProviderBookings = () => {
  const [value, onChange] = useState(new Date());

  const bookings = [
    {
      image: "Picture",
      order_type: "Basic Order",
      order_desc: "Install rims",
      order_date: "Dec 3, 2022",
      order_due: "Dec 7, 2022",
      total: "$500.00",
      status: "completed",
    },
    {
      image: "Active",
      order_type: "Basic Order",
      order_desc: "Install rims",
      order_date: "Dec 3, 2022",
      order_due: "Dec 7, 2022",
      total: "$500.00",
      status: "active",
    },
    {
      image: "Scheduled",
      order_type: "Basic Order",
      order_desc: "Paint rims",
      order_date: "Dec 123, 2022",
      order_due: "Dec 755, 2022",
      total: "$1500.00",
      status: "scheduled",
    },
    {
      image: "Cancelled",
      order_type: "Basic Order",
      order_desc: "Install rims",
      order_date: "Dec 3, 2022",
      order_due: "Dec 7, 2022",
      total: "$500.00",
      status: "cancelled",
    },
    {
      image: "Scheduled",
      order_type: "Basic Order",
      order_desc: "Install rims",
      order_date: "Dec 3, 2022",
      order_due: "Dec 7, 2022",
      total: "$500.00",
      status: "scheduled",
    },
  ];

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default ProviderBookings;
