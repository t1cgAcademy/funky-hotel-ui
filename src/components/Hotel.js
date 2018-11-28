import React, { Component } from 'react';
import RoomForm from './RoomForm';

export default class Hotel extends Component {
  state = {
    isLoading: true,
    dataRoom: [],
    dataReservation: [],
    price: null,
    name: '',
    number: null,
    beds: '',
    bathtub: false,
    kitchen: false,
    postRoomResponse: ''
  };

  componentDidMount() {
    this.getDataRoom();
    this.getDataReservation();
  }

  // Get form input
  handleRoomFormChange = e => {
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

  addRoom = async e => {
    e.preventDefault();
    try {
      const body = {
        price: this.state.price,
        name: this.state.name,
        number: this.state.number,
        bed: this.state.beds,
        bathtub: this.state.bathtub,
        kitchen: this.state.kitchen
      };
      console.log('BODY', body);
      const postRoom = await fetch(`http://localhost:7001/api/rest/room`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const response = await postRoom.json();
      console.log('RESP', response);

      // Success message
      this.setState({ postRoomResponse: response.msg });
      setTimeout(() => {
        this.setState({ postRoomResponse: '' });
      }, 3000);
    } catch (error) {
      console.log('Error occurred in posting room data.');
      console.log('ERROR:', error);
    }
  };

  // Async await example
  getDataRoom = async () => {
    try {
      const api_call = await fetch(`http://localhost:7001/api/rest/room`);
      const data = await api_call.json();
      this.setState({ dataRoom: data, isLoading: false });
    } catch (error) {
      console.log('Error occurred in fetching room data.');
      console.log('ERROR:', error);
    }
  };

  // Promises example
  getDataReservation = () => {
    this.setState({ isLoading: true });
    fetch(`http://localhost:7001/api/rest/reservation`)
      .then(response => response.json())
      .then(data => this.setState({ dataReservation: data, isLoading: false }))
      .catch(err =>
        console.log('Error occurred in fetching reservation data.')
      );
  };

  // mapErrors = () => {
  //   this.state.postRoomResponse.map(error => <h2>{error}</h2>);
  // };

  render() {
    return (
      <div>
        <RoomForm
          onChange={this.handleRoomFormChange}
          checkboxChange={this.handleCheckboxChange}
          addRoom={this.addRoom}
        />
        <h3>{this.state.postRoomResponse}</h3>
      </div>
    );
  }
}
