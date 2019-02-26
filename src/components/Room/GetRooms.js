import React, { Component } from 'react';
import MapRooms from './MapRooms';

export default class GetRooms extends Component {
  state = {
    dataRoom: []
  };

  componentDidMount() {
    this.getDataRoom();
  }

  // Sort rooms by price
  sortRoomsByPrice = () => {};

  // Fetch rooms
  getDataRoom = () => {};

  render() {
    return (
      <div>
        <button onClick={this.sortRoomsByPrice}>Sort Rooms By Price</button>
        <MapRooms dataRoom={this.state.dataRoom} />
      </div>
    );
  }
}
