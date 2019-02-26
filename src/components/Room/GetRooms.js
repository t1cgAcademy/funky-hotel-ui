import React, { Component } from 'react';
import MapRooms from './MapRooms';

export default class GetRooms extends Component {
  state = {
    isLoading: true,
    dataRoom: []
  };

  componentDidMount() {
    this.getDataRoom();
  }

  sortRoomsByPrice = () => {
    let rooms = this.state.dataRoom;

    rooms = rooms.sort((a, b) => {
      return a.price - b.price;
    });
    this.setState({ dataRoom: rooms });
  };

  // Promises example
  getDataRoom = () => {
    console.log('getDataRoom function call');
    fetch(`http://localhost:7001/api/rest/room`)
      .then(response => response.json())
      .then(data => {
        console.log('getDataRoom response', data);
        this.setState({ dataRoom: data, isLoading: false });
      })
      .catch(err => console.log('Error occurred in fetching room data.'));
  };

  render() {
    return (
      <div>
        <button onClick={this.sortRoomsByPrice}>Sort Rooms By Price</button>
        <MapRooms dataRoom={this.state.dataRoom} />
      </div>
    );
  }
}
