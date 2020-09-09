import React, { Component } from 'react'
import './index.scss';

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return(
      <div className="article-wrapper">
        文章详情页
      </div>
    )
  }
}

export default Article