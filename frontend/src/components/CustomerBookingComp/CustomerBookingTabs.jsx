import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import moment from "moment";

import "react-tabs/style/react-tabs.css";
import "../../CSS/BookingTabs.css";

import TabComp from "./CustomerTabComp";
const BookingsTabs = () => {
  const [bookings, setBookings] = useState([]);
  const dateNow = moment().format("L");
  useEffect(() => {
    async function getBookings() {
      try {
        const response = await axios({
          method: "get",
          url: `${
            import.meta.env.VITE_PORT
          }/booking/client/${localStorage.getItem("userId")}`,
        });

        console.log(response);

        if (response) {
          setBookings(response.data.bookings);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getBookings();
  }, []);

  const completedOrders = bookings.filter(
    (booking) => booking.status === "completed"
  );
  const activeOrders = bookings.filter(
    (booking) =>
      booking.status === "scheduled" && booking.date_order === dateNow
  );

  const scheduledOrders = bookings.filter(
    (booking) =>
      booking.status === "scheduled" && booking.date_order !== dateNow
  );

  const cancelledOrders = bookings.filter(
    (booking) => booking.status === "cancelled"
  );

  const pendingOrders = bookings.filter(
    (booking) => booking.status === "pending"
  );

  return (
    <Tabs className="tab-container">
      <TabList>
        <Tab>Pending</Tab>
        <Tab>Scheduled</Tab>
        <Tab>Active</Tab>
        <Tab>Completed</Tab>
        <Tab>Cancelled</Tab>
        <Tab>All</Tab>
      </TabList>

      <TabPanel className="">
        <TabComp orders={pendingOrders} />
      </TabPanel>
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
