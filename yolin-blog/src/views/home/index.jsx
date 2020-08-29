import './index.scss'
import React, { Component }  from 'react'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'YoLinDeng',
      articleList: [
        {
          title: 'egg.js+mongoose实现二级评论',
          detail: '',
        }
      ]
    }
  }
  render() {
    return(
      <div className="home-wrapper">
      </div>
    )
  }
}

export default Home
