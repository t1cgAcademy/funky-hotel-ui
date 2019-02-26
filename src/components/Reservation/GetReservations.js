import React, { Component } from 'react';
import MapReservations from './MapReservations';

export default class GetReservations extends Component {
  state = {
    dataReservation: []
  };

  componentDidMount() {
    this.getDataReservation();
  }

  sortResvsByDate = () => {
    let resv = this.state.dataReservation;

    resv = resv.sort((a, b) => {
      return new Date(a.checkIn) - new Date(b.checkIn);
    });
    this.setState({ dataReservation: resv });
  };

  // Promises example
  getDataReservation = () => {
    fetch(`http://localhost:7001/api/rest/reservation`)
      .then(response => response.json())
      .then(data => this.setState({ dataReservation: data }))
      .catch(err =>
        console.log('Error occurred in fetching reservation data.')
      );
  };

  render() {
    return (
      <div>
        <button onClick={this.sortResvsByDate}>Sort Rooms By Check In</button>
        <MapReservations dataReservation={this.state.dataReservation} />
      </div>
    );
  }
}
