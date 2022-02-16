import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state);
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name of Restaurant" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
