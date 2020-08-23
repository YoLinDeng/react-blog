import './index.scss';
import React, { Component } from 'react';

class Label extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return(
      <div className="label-wrapper">
        标签
      </div>
    )
  }
}

export default Label