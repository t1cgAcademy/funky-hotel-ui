import React, { Component } from 'react';
import MapReservations from './MapReservations';

export default class GetReservations extends Component {
  state = {
    dataReservation: []
  };

  componentDidMount() {
    this.getDataReservation();
  }

  // Sort reservations by date here
  sortResvsByDate = () => {};

  // Fetch reservations
  getDataReservation = () => {};

  render() {
    return (
      <div>
        <button onClick={this.sortResvsByDate}>Sort Rooms By Check In</button>
        <MapReservations dataReservation={this.state.dataReservation} />
      </div>
    );
  }
}
