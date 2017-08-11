import React, { Component } from 'react';
import Son from './son.js';
class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:'我是爸爸'
    };
  }
  handleClick = () => {
    this.setState({
      data: this.state.data === '我是爷爷' ? '我是爸爸' : '我是爷爷'
    });
  }
  render() {
    return (
          <Son data={this.state.data} handleClick={this.handleClick}></Son>
      )
  }
}

export default Father;
