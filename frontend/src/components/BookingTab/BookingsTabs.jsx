import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "../../CSS/BookingTabs.css";
import TabComp from "./TabComp";
const BookingsTabs = () => {
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

  const completedOrders = bookings.filter(
    (booking) => booking.status === "completed"
  );
  const activeOrders = bookings.filter(
    (booking) => booking.status === "active"
  );

  const scheduledOrders = bookings.filter(
    (booking) => booking.status === "scheduled"
  );

  const cancelledOrders = bookings.filter(
    (booking) => booking.status === "cancelled"
  );

  console.log(completedOrders);
  return (
    <Tabs className="tab-container">
      <TabList>
        <Tab>Scheduled</Tab>
        <Tab>Active</Tab>
        <Tab>Completed</Tab>
        <Tab>Cancelled</Tab>
        <Tab>All</Tab>
      </TabList>

      <TabPanel className="">
        <TabComp orders={scheduledOrders} />
      </TabPanel>
      <TabPanel>
        <TabComp orders={activeOrders} />
      </TabPanel>
      <TabPanel className="">
        <TabComp orders={completedOrders} />
      </TabPanel>
      <TabPanel>
      <TabComp orders={cancelledOrders} />
      </TabPanel>
      <TabPanel className="">
      <TabComp orders={bookings} />
      </TabPanel>
    </Tabs>
  );
};

export default BookingsTabs;
