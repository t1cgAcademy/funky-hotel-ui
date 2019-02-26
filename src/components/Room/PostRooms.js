import React, { Component } from 'react';
import RoomForm from './RoomForm';

export default class PostRooms extends Component {
  state = {
    price: null,
    name: '',
    number: null,
    bed: '',
    bathtub: false,
    kitchen: false,
    postRoomResponse: '',
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

  addRoom = async e => {
    e.preventDefault();
    try {
      const roomBody = {
        price: this.state.price,
        name: this.state.name,
        number: this.state.number,
        bed: this.state.bed,
        bathtub: this.state.bathtub,
        kitchen: this.state.kitchen
      };
      console.log('ROOM BODY: ', roomBody);
      const postRoom = await fetch(`http://localhost:7001/api/rest/room`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(roomBody)
      });
      const response = await postRoom.json();
      console.log('ROOM RESPONSE', response);
      if (response.errors) {
        // Success message
        this.setState({ errors: response.errors });
        setTimeout(() => {
          this.setState({ errors: {} });
        }, 5000);
      }
      // Success message
      this.setState({ postRoomResponse: response.msg });
      setTimeout(() => {
        this.setState({ postRoomResponse: '' });
      }, 5000);
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
      this.setState({ dataRoom: data });
    } catch (error) {
      console.log('Error occurred in fetching room data.');
      console.log('ERROR:', error);
    }
  };

  render() {
    return (
      <div>
        <RoomForm
          onChange={this.handleFormChange}
          checkboxChange={this.handleCheckboxChange}
          addRoom={this.addRoom}
          errors={this.state.errors}
        />

        <h3>{this.state.postRoomResponse}</h3>
      </div>
    );
  }
}
