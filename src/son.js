import React, { Component } from 'react';
class Son extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    const {data, handleClick} = this.props;
    return (
          <div onClick={handleClick}>
            {data}
          </div>
      )
  }
}

export default Son;
