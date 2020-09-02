import './index.scss'
import React, { Component } from 'react';
class Study extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docList: [
        {
          image: require('@/assets/images/study/vue-logo.png'),
          url: 'https://cn.vuejs.org/',
          title: 'vue.js'
        },
        {
          image: require('@/assets/images/study/react-logo.png'),
          url: 'https://react.docschina.org/',
          title: 'react.js'
        },
        {
          image: require('@/assets/images/study/es6-logo.png'),
          url: 'https://es6.ruanyifeng.com/',
          title: 'es6(阮一峰)'
        },
        {
          image: require('@/assets/images/study/egg-logo.png'),
          url: 'https://eggjs.org/zh-cn/',
          title: 'egg.js'
        },
        {
          image: require('@/assets/images/study/mongoose-logo.png'),
          url: 'https://mongoosejs.com/docs/guide.html',
          title: 'mongoose'
        },
        {
          image: require('@/assets/images/study/typeScript-logo.png'),
          url: 'https://typescript.bootcss.com/',
          title: 'typeScript'
        },
        {
          image: require('@/assets/images/study/vue-logo.png'),
          url: 'https://cn.vuejs.org/',
          title: 'Lodash'
        },
        {
          image: require('@/assets/images/study/vue-logo.png'),
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
          <p className="top-title">常用框架（库）文档</p>
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