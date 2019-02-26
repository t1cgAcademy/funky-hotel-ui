import React, { Component } from 'react';
import ReservationForm from './ReservationForm';

export default class PostReservations extends Component {
  state = {
    reserver: '',
    roomReserving: '',
    checkIn: undefined,
    checkOut: undefined,
    postResvResponse: '',
    errors: {}
  };

  // Get form input
  handleFormChange = e => {};

  // Get checkbox input
  handleCheckboxChange = e => {};

  // Post reservation function
  addReservation = e => {
    e.preventDefault();

    // Set each object key equal to state
    const reservationBody = {};
  };

  render() {
    return (
      <div>
        <h1>Post Reservation</h1>
        <ReservationForm
          onChange={this.handleFormChange}
          dateChange={this.handleFormChange}
          addReservation={this.addReservation}
          errors={this.state.errors}
        />
        <h3>{this.state.postResvResponse}</h3>
      </div>
    );
  }
}
