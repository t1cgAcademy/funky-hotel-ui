import React, { Component } from 'react';
import HotelCarousel from './Carousel/HotelCarousel';
import NavBar from '../components/NavBar/NavBar';
import style from './Home.css';
export default class Home extends Component {
  render() {
    return (
      <div id="Home">
        <HotelCarousel />
      </div>
    );
  }
}
