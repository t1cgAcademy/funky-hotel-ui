import React from 'react';

export default function ReservationForm(props) {
  return (
    <div>
      <h2>Reservation</h2>
      <form onSubmit={props.addReservation} style={{ display: 'grid' }}>
        <label htmlFor="reserver">
          Reserver:
          <input type="text" name="reserver" onChange={props.onChange} />
        </label>

        <label htmlFor="roomReserving">
          Room Reserving:
          <input type="text" name="roomReserving" onChange={props.onChange} />
        </label>

        <label htmlFor="checkIn">
          Check In:
          <input type="date" name="checkIn" onChange={props.dateChange} />
        </label>

        <label htmlFor="checkOut">
          Check Out:
          <input type="date" name="checkOut" onChange={props.dateChange} />
        </label>
        <div>
          <button type="submit">Add Reservation</button>
        </div>
      </form>
    </div>
  );
}
