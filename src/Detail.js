import React, { Component } from 'react';
import axios from 'axios';
class Detail extends Component {
  constructor() {
    super();
    this.state = {
      data: 'loading'
    };

  }
  handleClick=() => {
    //注意this作用域
    this.refs.h2.style.color='red';
  }
  componentDidMount() {
    const url = 'https://cnodejs.org/api/v1/topic/' + this.props.params.id;
    axios.get(url).then((res) => {
      this.setState({data: res.data.data.content})
    });
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.data}}></div>
    );
  }

}

export default Detail;
