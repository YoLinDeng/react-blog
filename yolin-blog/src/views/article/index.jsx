import React, { Component } from 'react'
import store from '@/store'
import './index.scss';

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleTitle: 'vue中微信JSAPI与外部H5支付相关实现过程及常见问题'
    }
  }
  componentDidMount() {
    store.dispatch({type: 'change', current: ''})
    console.log(this.props.match.params.id)
  }
  render() {
    return(
      <div className="article-wrapper">
        <div className="container">
          <div className="article-title">{this.state.articleTitle}</div>
        </div>
      </div>
    )
  }
}

export default Article