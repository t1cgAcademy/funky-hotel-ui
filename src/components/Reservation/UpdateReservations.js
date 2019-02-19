import React, { Component } from 'react';
import MapReservations from './MapReservations';

export default class UpdateReservations extends Component {
  state = {
    isLoading: true,
    dataReservation: [],
    modalContent: {
      id: '',
      reserver: '',
      checkIn: '',
      checkOut: '',
      roomReserving: ''
    },
    errors: {}
  };

  componentDidMount() {
    this.getDataReservation();
  }

  handleChange = e => {
    let modalContent = this.state.modalContent;
    modalContent[e.target.name] = e.target.value;
    this.setState({ modalContent: modalContent });
  };

  // Promises example
  getDataReservation = () => {
    fetch(`http://localhost:7001/api/rest/reservation`)
      .then(response => response.json())
      .then(data => this.setState({ dataReservation: data, isLoading: false }))
      .catch(err =>
        console.log('Error occurred in fetching reservation data.')
      );
  };

  updateReservation = () => {
    const reservationBody = {
      id: this.state.modalContent.id,
      reserver: this.state.modalContent.reserver,
      roomReserving: this.state.modalContent.roomReserving,
      checkIn: this.state.modalContent.checkIn,
      checkOut: this.state.modalContent.checkOut
    };
    console.log('RESERVATION BODY: ', reservationBody);
    fetch(`http://localhost:7001/api/rest/reservation`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservationBody)
    })
      .then(response => response.json())
      .then(data => {
        console.log('RESV RESPONSE: ', data);

        // Check for errors and display them
        if (data.errors) {
          this.setState({ errors: data.errors });
        } else {
          this.setState({ errors: {} });
        }

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

  handleShow = e => {
    let updateResv = {};
    updateResv.id = e.target.getAttribute('id');
    updateResv.reserver = e.target.getAttribute('reserver');
    updateResv.checkIn = e.target.getAttribute('checkin');
    updateResv.checkOut = e.target.getAttribute('checkout');
    updateResv.roomReserving = e.target.getAttribute('roomreserving');
    this.setState({ modalContent: updateResv });
  };

  render() {
    return (
      <MapReservations
        dataReservation={this.state.dataReservation}
        updateResv={e => this.updateReservation(e.target.id)}
        handleShow={this.handleShow}
        modalContent={this.state.modalContent}
        handleChange={this.handleChange}
        buttonType="update"
        response={this.state.postResvResponse}
        errors={this.state.errors}
      />
    );
  }
}
