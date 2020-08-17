import './Home.scss'
import React, { Component }  from 'react';
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'YoLinDeng'
    }
  }
  render() {
    return(
      <div className="home-wrapper">
        <div className="title1">hello~ {this.state.name}</div>
        <div className="desc">这里是首页!</div>
      </div>
    )
  }
}

export default Home
