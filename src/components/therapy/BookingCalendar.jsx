import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function BookingCalendar({ selectedDate, onDateChange }) {
  return (
    <div className="booking-calendar-wrapper">
      <Calendar
        onChange={onDateChange}
        value={selectedDate}
        minDate={new Date()}
        maxDate={new Date(Date.now() + 30 * 86400000)}
      />
    </div>
  );
}
