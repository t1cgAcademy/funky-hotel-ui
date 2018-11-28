import React from 'react';

export default function RoomForm(props) {
  return (
    <div className="roomForm">
      <h2>Create a new Room</h2>
      <form onSubmit={props.addRoom} style={{ display: 'grid' }}>
        <label htmlFor="price">
          Price:
          <input type="text" name="price" onChange={props.onChange} required />
        </label>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" onChange={props.onChange} required />
        </label>
        <label htmlFor="number">
          Number:
          <input type="text" name="number" onChange={props.onChange} required />
        </label>
        <label htmlFor="beds">
          Beds:
          <input type="text" name="beds" onChange={props.onChange} required />
        </label>
        <label htmlFor="">
          Bathtub
          <input
            type="checkbox"
            name="bathtub"
            onChange={props.checkboxChange}
          />
        </label>
        <label htmlFor="">
          Kitchen
          <input
            type="checkbox"
            name="kitchen"
            onChange={props.checkboxChange}
          />
        </label>
        <div>
          <button type="submit">Add Room</button>
        </div>
      </form>
    </div>
  );
}
