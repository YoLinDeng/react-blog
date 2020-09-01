import './index.scss'
import React, { Component } from 'react';
class Study extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docList: [
        {
          image: require('@/assets/images/vue-logo.png'),
          url: 'https://cn.vuejs.org/',
          title: 'vue.js'
        },
        {
          image: require('@/assets/images/vue-logo.png'),
          url: 'https://cn.vuejs.org/',
          title: 'vue.js'
        },
        {
          image: require('@/assets/images/vue-logo.png'),
          url: 'https://cn.vuejs.org/',
          title: 'vue.js'
        },
        {
          image: require('@/assets/images/vue-logo.png'),
          url: 'https://cn.vuejs.org/',
          title: 'vue.js'
        },
        {
          image: require('@/assets/images/vue-logo.png'),
          url: 'https://cn.vuejs.org/',
          title: 'vue.js'
        },
        {
          image: require('@/assets/images/vue-logo.png'),
          url: 'https://cn.vuejs.org/',
          title: 'vue.js'
        },
        {
          image: require('@/assets/images/vue-logo.png'),
          url: 'https://cn.vuejs.org/',
          title: 'vue.js'
        },
        {
          image: require('@/assets/images/vue-logo.png'),
          url: 'https://cn.vuejs.org/',
          title: 'vue.js'
        }
      ]
    };
    this.goToDoc = this.goToDoc.bind(this)
  }
  goToDoc(url) {
    window.location.href = url
  }
  render() {
    return (
      <div className="study-wrapper">
        <div className="doc-list">
          <p className="top-title">常用文档</p>
          {
            this.state.docList.map((item,index) => {
              return(
                <div className="list-item" key={index} onClick={() => this.goToDoc(item.url)}>
                  <img src={item.image} alt="" className="item-image"/>
                  <div className="item-title">{item.title}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default Study