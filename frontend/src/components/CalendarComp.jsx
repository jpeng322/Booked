import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
const CalendarComp = () => {
  const [date, setDate] = useState(new Date());
  // console.log(date.getDay());

  const onChange = (date) => {
    setDate(date);
  };
  // console.log(document.querySelectorAll(".react-calendar__tile"));
  // const buttons = document.querySelectorAll("button")
  // console.log(buttons)
  // const daysArray = document.querySelectorAll(".react-calendar__tile");
  // daysArray.map(element => {
  //   console.log(element)
  // });
  // if (daysArray.length === 0) {
  //   return;
  // } else {
  //   daysArray.map((element) => {
  //     console.log(element);
  //   });
  // }
  // console.log(daysArray);
  useEffect(() => {
    const daysArray = document.querySelectorAll(".react-calendar__tile");
    for (let i = 0; i < daysArray.length; i++) {
      console.log(daysArray[i])
    }
    //hit API route that checks for bookings on that date findMany where provider = userId and dateTime = Wed Apr 19 2023 00:00:00 GMT-0400 (Eastern Daylight Time)

    // if response.status findMany length > 0, classList add green or an "available appointment color"
    console.log(daysArray);
  }, []);
  return (
    <>
      <div>
        <Calendar
          onClickDay={(value) => console.log(value)}
          // tileClassName={({ activeStartDate, date, view }) =>
          //   date =
          // }
          onChange={onChange}
          value={date}
        />
      </div>
      <div>This is</div>
      {/* <div className="picked-tile">asdasd</div> */}
    </>
  );
};

export default CalendarComp;
