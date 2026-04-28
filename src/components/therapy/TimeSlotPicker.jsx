const defaultSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
];

export default function TimeSlotPicker({ slots = defaultSlots, selectedSlot, onSelect }) {
  return (
    <div className="time-slots">
      {slots.map(slot => (
        <button
          key={slot}
          className={`time-slot ${selectedSlot === slot ? 'selected' : ''}`}
          onClick={() => onSelect(slot)}
        >
          {slot}
        </button>
      ))}
    </div>
  );
}
