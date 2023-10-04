import React from 'react';
import { Calendar } from 'antd';
import { IEvent } from '../models/IEvent';
import { Dayjs } from 'dayjs';
import { formateDate } from '../utils/date';

interface EventCalendarProps {
  events: IEvent[];
};

export const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Dayjs) => {
    const formatedDate = formateDate(value);
    const currentDayEvents = events.filter(event => event.date === formatedDate);
    return (
      <div>
        {currentDayEvents.map((event, index) =>
          <div key={index}>{event.description}</div> 
        )}
      </div>
    );
  };

  return (
    <Calendar
      cellRender={dateCellRender}
    />
  );
};