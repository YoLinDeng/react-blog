import './index.scss'
import React, { Component } from 'react';
class Study extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studyList: [
        {
          title: '常用文档',
          list: [
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
              image: require('@/assets/images/study/loadsh-logo.png'),
              url: 'https://www.lodashjs.com/',
              title: 'Lodash'
            },
            {
              image: require('@/assets/images/study/day-logo.png'),
              url: 'https://day.js.org/',
              title: 'day.js'
            }
          ]
        },
        {
          title: '技术社区',
          list: [
            {
              image: require('@/assets/images/github.png'),
              url: 'https://github.com/',
              title: 'github'
            },
            {
              image: require('@/assets/images/study/stackOverflow-logo.jpg'),
              url: 'https://stackoverflow.com/',
              title: 'StackOverflow'
            },
            {
              image: require('@/assets/images/study/sifou-logo.jpg'),
              url: 'https://segmentfault.com/',
              title: 'Segmentfault'
            },
            {
              image: require('@/assets/images/study/juejin-logo.jpg'),
              url: 'https://juejin.im/',
              title: '掘金'
            },
            {
              image: require('@/assets/images/study/w3c-logo.jpg'),
              url: 'https://www.w3school.com.cn/',
              title: 'W3cshool'
            },
            {
              image: require('@/assets/images/study/cnode-logo.png'),
              url: 'https://cnodejs.org/',
              title: 'CNode'
            }
          ]
        }
      ]
    };
    this.goToDoc = this.goToDoc.bind(this)
  }
  goToDoc(url) {
    window.open(url)
  }
  render() {
    return (
      <div className="study-wrapper">
        {
          this.state.studyList.map((sItem, sIndex) => {
            return(
              <div className="list-container" key={sIndex}>
                <p className="top-title">{sItem.title}</p>
                {
                  sItem.list.map((item, index) => {
                    return(
                      <div className="list-item" key={index} onClick={() => this.goToDoc(item.url)}>
                        <img src={item.image} alt="" className="item-image"/>
                        <div className="item-title">{item.title}</div>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default Study