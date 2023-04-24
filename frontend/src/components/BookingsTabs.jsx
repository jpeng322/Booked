import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "../CSS/BookingTabs.css";

const BookingsTabs = () => {
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
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel className="">
        {/* <div className="completed-container">
          <div className="completed-header">ORDER DATE</div>
          <div className="due-header">DUE ON</div>
          <div className="total-header">TOTAL</div>
          <div className="status-header">STATUS</div>
          <div className="picture-container">PICTURE</div>
          <div className="completed-type">BASIC ORDER</div>
          <div className="completed-description">
            Install custom rims on my truck
          </div>
          <div className="completed-date">DEC 3, 2022</div>
          <div className="completed-due"> DEC 7, 2022</div>
          <div className="completed-price">$500.00</div>
          <div className="completed-book">BOOK AGAIN</div>
          
        </div> */}
        <div className="completed-containers">
          <div className="completed-headers ">
            <div></div>
            <div></div>
            <div></div>
            <div>ORDER DATE </div>
            <div>DUE ON </div>
            <div>TOTAL </div>
            <div>STATUS </div>
          </div>
          <div className="completed-information">
            <div>PICTURE</div>
            <div>BASIC ORDER</div>
            <div>ORDER DESC</div>
            <div>DEC 3, 2022</div>
            <div>DEC 7, 2022</div>
            <div>500.00 </div>
            {/* <button>BOOK AGAIN</button> */}
            <div><button className="p-3">BOOK AGAIN</button></div>
          </div>
          
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Any content 4</h2>
      </TabPanel>
      <TabPanel className="">
        <h2>Any content 5</h2>
      </TabPanel>
    </Tabs>
  );
};

export default BookingsTabs;
