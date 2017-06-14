import React, { Component } from 'react';
import axios from 'axios';
import './List.css';
import {Link} from 'react-router'
class List extends Component {
  constructor() {
    super();
    this.state = {
      docs: [],
      loading: true
    };

  }
  static get defaultProps() {
    return {
      test:'555'
    }
  }
  handleClick = (e) => {
    console.log(this)
    console.log(e.target)
  }
  componentDidMount() {
    const url = 'https://cnodejs.org/api/v1/topics?limit=10';
    axios.get(url).then((res) => {
      this.setState({loading: false})
      this.setState({docs: res.data.data})
    });
  }
  render() {
    return (
          <div onClick={this.handleClick}>
            <div style={{display:this.state.loading?'block':'none'}}>loading</div>
            {this.state.docs.map(item => 
              <Link  to={"/about/"+item.id} key={item.id} >
                <div className='container'>
                  <img src={item.author.avatar_url}></img>
                  <div>{item.title}</div>
                  <div>作者:  {item.author.loginname}</div>
                </div>
              </Link>
            )}
          </div>
      )
  }
}

export default List;
