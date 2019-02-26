import React, { Component } from 'react';
import MapReservations from './MapReservations';

export default class DeleteReservations extends Component {
  state = {
    dataReservation: []
  };

  componentDidMount() {
    this.getDataReservation();
  }

  // Promises example
  getDataReservation = () => {
    fetch(`http://localhost:7001/api/rest/reservation`)
      .then(response => response.json())
      .then(data => this.setState({ dataReservation: data }))
      .catch(err =>
        console.log('Error occurred in fetching reservation data.')
      );
  };

  deleteReservation = id => {
    console.log('id', id);
    fetch(`http://localhost:7001/api/rest/reservation/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log('RESV RESPONSE: ', data);
        // Success message
        this.setState({ postResvResponse: data.msg });
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
        <MapReservations
          dataReservation={this.state.dataReservation}
          buttonType="delete"
          onDeleteClick={e => this.deleteReservation(e.target.id)}
        />
        ;
      </div>
    );
  }
}
