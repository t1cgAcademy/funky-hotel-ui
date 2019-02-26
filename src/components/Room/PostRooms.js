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
  handleFormChange = e => {};

  // Get checkbox input
  handleCheckboxChange = e => {};

  // Post room function
  addRoom = async e => {
    e.preventDefault();

    // Set each object key equal to state
    const roomBody = {};
  };

  // Fetch rooms
  getDataRoom = async () => {};

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
