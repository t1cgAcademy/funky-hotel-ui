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
    return <MapRooms dataRoom={this.state.dataRoom} />;
  }
}
