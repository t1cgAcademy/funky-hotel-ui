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
  handleFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Get checkbox input
  handleCheckboxChange = e => {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
  };

  addReservation = e => {
    e.preventDefault();
    const reservationBody = {
      reserver: this.state.reserver,
      roomReserving: this.state.roomReserving,
      checkIn: this.state.checkIn,
      checkOut: this.state.checkOut
    };
    console.log('RESERVATION BODY: ', reservationBody);
    fetch(`http://localhost:7001/api/rest/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservationBody)
    })
      .then(response => response.json())
      .then(response => {
        console.log('RESV RESPONSE: ', response);
        if (response.errors) {
          // Error message
          this.setState({ errors: response.errors });
        } else {
          this.setState({ errors: {} });
        }

        // Success message
        this.setState({ postResvResponse: response.msg });
        setTimeout(() => {
          this.setState({ postResvResponse: '' });
        }, 5000);
      })
      .catch(err => {
        console.log('ERROR', err);
      });
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
