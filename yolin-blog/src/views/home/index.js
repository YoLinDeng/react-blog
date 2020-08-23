import './index.scss'
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
        首页
      </div>
    )
  }
}

export default Home
