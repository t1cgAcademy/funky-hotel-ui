import React, { Component } from 'react';
import MapRooms from './MapRooms';

export default class DeleteRooms extends Component {
  state = {
    isLoading: true,
    dataRoom: []
  };

  componentDidMount() {
    this.getDataRoom();
  }

  getDataRoom = () => {
    console.log('getDataRoom function call');
    fetch(`http://localhost:7001/api/rest/room`)
      .then(response => response.json())
      .then(data => {
        console.log('getDataRoom response', data);
        this.setState({ dataRoom: data, isLoading: false });
      })
      .catch(err => console.log('Error occurred in fetching room data: ', err));
  };

  deleteRoom = id => {
    console.log('deleteRoom function call');
    console.log('deleteRoom id', id);
    fetch(`http://localhost:7001/api/rest/room/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log('Room Response: ', data);
        // Success message
        this.setState({ postRoomResponse: data.msg });
        setTimeout(() => {
          this.setState({ postRoomResponse: '' });
        }, 5000);
      })
      .catch(err => {
        console.log('Error occured in delete room: ', err);
      });
  };

  render() {
    return (
      <div>
        <MapRooms
          dataRoom={this.state.dataRoom}
          buttonType="delete"
          onDeleteClick={e => this.deleteRoom(e.target.id)}
        />
        ;
      </div>
    );
  }
}
