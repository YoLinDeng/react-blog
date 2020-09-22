import './index.scss'
import React, { Component }  from 'react';

class About extends Component {
  constructor() {
    super()
    this.state = {
      name: 'YoLinDeng'
    }
  }
  render() {
    return (
      <div>
        <div>Hello~ {this.state.name},这里是关于页</div>
      </div>
    )
  }
}
export default About