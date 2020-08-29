import './index.scss'
import React, { Component }  from 'react'
import CodeBlock from "@/components/CodeBlock";
import ReactMarkdown from 'react-markdown'
import apiMd from "@/assets/md/api.md"

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
        {apiMd}
        <ReactMarkdown
          source={apiMd}
          escapeHtml={true}
          renderers={{
            code: CodeBlock
          }}
        />
      </div>
    )
  }
}

export default Home
