import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarComponent = ({ events, onSelectSlot, onSelectEvent }) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      selectable={true}
      select={onSelectSlot}
      eventClick={onSelectEvent}
      eventContent={(eventInfo) => {
        return (
          <>
            <b>{eventInfo.event.title}</b>
            <i>{eventInfo.event.extendedProps.description}</i>
          </>
        );
      }}
    />
  );
};

export default CalendarComponent;
