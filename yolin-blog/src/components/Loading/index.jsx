import { Spin } from 'antd';
import React, { Component }  from 'react';
import './index.scss'
class Loading extends Component {
  render() {
    return(
      <div className="loading-wrapper">
        <Spin className="loading-icon"/>
      </div>
    )
  }
}

export default Loading