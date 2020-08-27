import React, { Component }  from 'react';
import './index.scss'
class Persional extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'YoLinDeng',
      sign: '等到秋叶终于金黄，等到华发悄然苍苍~'
    }
  }
  render() {
    return(
      <div className="persional-wrapper">
        <div className="top-bg">
          <div className="avatar-container">
            <img src={require('@/assets/images/luff.jpg')} alt="头像" className="avatar-icon"/>
          </div>
        </div>
        <div className="info-container">
          <div className="name">{ this.state.name }</div>
            <div className="sign">{ this.state.sign }</div>
        </div>
      </div>
    )
  }
}

export default Persional