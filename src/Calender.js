import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calender({date}) {

  return (

    <Calendar 
    // onChange={onChange}
     value={date} />
  )
}

export default Calender