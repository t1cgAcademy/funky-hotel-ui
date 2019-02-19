import React, { Component } from 'react';
import MapReservations from './MapReservations';

export default class GetReservations extends Component {
  state = {
    isLoading: true,
    dataReservation: []
  };

  componentDidMount() {
    this.getDataReservation();
  }

  // Promises example
  getDataReservation = () => {
    fetch(`http://localhost:7001/api/rest/reservation`)
      .then(response => response.json())
      .then(data => this.setState({ dataReservation: data, isLoading: false }))
      .catch(err =>
        console.log('Error occurred in fetching reservation data.')
      );
  };

  render() {
    return <MapReservations dataReservation={this.state.dataReservation} />;
  }
}
