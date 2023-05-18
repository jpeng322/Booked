import React, {useEffect, useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import "react-tabs/style/react-tabs.css";

import "../../CSS/BookingTabs.css";
import TabComp from "./TabComp";
const BookingsTabs = () => {

  const [bookings, setBookings] = useState([])
  useEffect(() => {
    async function getBookings() {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:4000/booking/client/1",
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

  console.log(bookings)

  // const bookings = [
  //   {
  //     image: "Picture",
  //     order_type: "Basic Order",
  //     order_desc: "Install rims",
  //     order_date: "Dec 3, 2022",
  //     order_due: "Dec 7, 2022",
  //     total: "$500.00",
  //     status: "completed",
  //   },
  //   {
  //     image: "Active",
  //     order_type: "Basic Order",
  //     order_desc: "Install rims",
  //     order_date: "Dec 3, 2022",
  //     order_due: "Dec 7, 2022",
  //     total: "$500.00",
  //     status: "active",
  //   },
  //   {
  //     image: "Scheduled",
  //     order_type: "Basic Order",
  //     order_desc: "Paint rims",
  //     order_date: "Dec 123, 2022",
  //     order_due: "Dec 755, 2022",
  //     total: "$1500.00",
  //     status: "scheduled",
  //   },
  //   {
  //     image: "Cancelled",
  //     order_type: "Basic Order",
  //     order_desc: "Install rims",
  //     order_date: "Dec 3, 2022",
  //     order_due: "Dec 7, 2022",
  //     total: "$500.00",
  //     status: "cancelled",
  //   },
  //   {
  //     image: "Scheduled",
  //     order_type: "Basic Order",
  //     order_desc: "Install rims",
  //     order_date: "Dec 3, 2022",
  //     order_due: "Dec 7, 2022",
  //     total: "$500.00",
  //     status: "scheduled",
  //   },
  // ];

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

  const pendingOrders = bookings.filter(
    (booking) => booking.status === "pending"
  );

  console.log(completedOrders);
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
