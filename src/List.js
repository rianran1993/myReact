import React, { Component } from 'react';
import axios from 'axios';
import './List.css';
import {Link} from 'react-router'
class List extends Component {
  constructor(props) {
    // console.log(this); es6中的constructor不能在super前用this
    super(props);  //可以在下面使用this.props,因为绑定了父级的props到当前组建（this）上
    this.state = {
      docs: [],
      loading: true
    };
    console.log(this.props);

    // this.handleClick = this.handleClick.bind(this); //绑定方法到子类上,也可以写在render渲染的元素上onClick={this.handleClick.bind(this)}.
  }
  static get defaultProps() {
    return {
      test:'555'
    }
  }
  // handleClick(e){
  //   console.log(this)
  //   console.log(e.target)
  // }  

  // 或直接使用箭头函数,将this，指向外面  
  handleClick = (e) =>{
    console.log(this.props.test)
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
