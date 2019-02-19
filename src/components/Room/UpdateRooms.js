import React, { Component } from 'react';
import MapRooms from './MapRooms';

export default class UpdateRooms extends Component {
  state = {
    dataRoom: [],
    isLoading: true,
    modalContent: {
      id: '',
      price: undefined,
      name: '',
      number: undefined,
      bed: '',
      bathtub: undefined,
      kitchen: undefined,
      postRoomResponse: ''
    },
    errors: {}
  };

  componentDidMount() {
    this.getDataRoom();
  }

  handleChange = e => {
    let modalContent = this.state.modalContent;
    modalContent[e.target.name] = e.target.value;
    this.setState({ modalContent: modalContent });
  };

  // Get checkbox input
  handleCheckboxChange = e => {
    const modalContent = this.state.modalContent;
    modalContent[e.target.name] = !modalContent[e.target.name];
    this.setState({ modalContent: modalContent });
  };

  // Promises example
  getDataRoom = () => {
    console.log('getDataRoom function called');
    fetch(`http://localhost:7001/api/rest/room`)
      .then(response => response.json())
      .then(data => {
        console.log('getDataRoom response', data);
        this.setState({ dataRoom: data, isLoading: false });
      })
      .catch(err => console.log('Error occurred in fetching room data.'));
  };

  updateRoom = () => {
    const roomBody = {
      id: this.state.modalContent.id,
      price: this.state.modalContent.price,
      name: this.state.modalContent.name,
      number: this.state.modalContent.number,
      bed: this.state.modalContent.beds,
      bathtub: this.state.modalContent.bathtub,
      kitchen: this.state.modalContent.kitchen
    };
    console.log('Room body: ', roomBody);
    fetch(`http://localhost:7001/api/rest/room`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(roomBody)
    })
      .then(response => response.json())
      .then(data => {
        console.log('ROOM RESPONSE: ', data);

        // Check for errors and display them
        if (data.errors) {
          this.setState({ errors: data.errors });
        } else {
          this.setState({ errors: {} });
        }

        // Success message
        this.setState({ postRoomResponse: data.msg });
        setTimeout(() => {
          this.setState({ postRoomResponse: '' });
        }, 5000);
      })
      .catch(err => {
        console.log('ERROR:', err);
      });
  };

  handleShow = e => {
    let updateRoom = {};

    updateRoom.id = e.target.getAttribute('id');
    updateRoom.price = e.target.getAttribute('price');
    updateRoom.name = e.target.getAttribute('name');
    updateRoom.number = e.target.getAttribute('number');
    updateRoom.bed = e.target.getAttribute('bed');
    const convertBathtub =
      e.target.getAttribute('bathtub') === 'true' ? true : false;
    const convertKitchen =
      e.target.getAttribute('kitchen') === 'true' ? true : false;
    updateRoom.bathtub = convertBathtub;
    updateRoom.kitchen = convertKitchen;

    this.setState({ modalContent: updateRoom });
  };

  render() {
    return (
      <MapRooms
        dataRoom={this.state.dataRoom}
        updateRoom={e => this.updateRoom(e.target.id)}
        handleShow={this.handleShow}
        modalContent={this.state.modalContent}
        handleChange={this.handleChange}
        handleCheckboxChange={this.handleCheckboxChange}
        buttonType="update"
        bathtubChecked={this.state.modalContent.bathtub}
        kitchenChecked={this.state.modalContent.kitchen}
        response={this.state.postRoomResponse}
        errors={this.state.errors}
      />
    );
  }
}
