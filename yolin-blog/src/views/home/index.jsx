import './index.scss'
import React, { Component }  from 'react';
import ReactMarkdown from 'react-markdown'

const input = '# This is a header\n\nAnd this is a paragraph'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'YoLinDeng',
      articleList: [
        {
          title: ''
        }
      ]
    }
  }
  render() {
    return(
      <div className="home-wrapper">
        <ReactMarkdown source={input} />,
      </div>
    )
  }
}

export default Home
