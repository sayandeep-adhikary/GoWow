import React from 'react'
import { Badge, Calendar } from 'antd';

export default function CalendarView() {
  const onPanelChange = (value, mode) => {
    // console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <div className='container'>
      <Calendar onPanelChange={onPanelChange} />
    </div>
  )
}
