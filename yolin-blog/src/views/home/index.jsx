import './index.scss'
import React, { Component }  from 'react'
import { Tag, Pagination  } from 'antd';
import { ClockCircleOutlined, AppstoreOutlined, TagOutlined } from '@ant-design/icons';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'YoLinDeng',
      articleList: [
        {
          id: 1,
          title: 'egg.js+mongoose实现二级评论',
          desc: '关于egg.js+mongoose实现二级评论的描述，egg.js+mongoose实现二级评论egg.js+mongoose实现二级评论',
          time: '2020-8-30',
          type: '前端,后端,移动端',
          label: 'vue,react,eggg,ts'
        },
        {
          id: 2,
          title: 'egg.js+mongoose实现二级评论',
          desc: 'egg.js+mongoose实现二级评论egg.js+mongoose实现二级评论egg.js+mongoose实现二级评论egg.js+mongoose实现二级评论egg.js+mongoose实现二级评论',
          time: '2020-8-30',
          type: '前端,后端,移动端',
          label: 'vue,react,eggg,ts,js'
        }
      ],
    }
  }
  splitString(str) {
    return str.split(',')
  }
  onChangePagination(page, pageSize) {
    console.log(page, pageSize)
  }
  goToArticle(id) {
    console.log(id)
  }
  render() {
    return(
      <div className="home-wrapper">
        {
          this.state.articleList.map((item, index) => {
            return(
              <div className="article-item" key={index}>
                <div className="top">
                  <div className="title" onClick={this.goToArticle(item.id)}>{item.title}</div>
                  <div className="time-box">
                  <ClockCircleOutlined />
                  <span className="text">{item.time}</span>
                  </div>
                </div>
                <div className="center-box">
                  <div className="desc" onClick={this.goToArticle(item.id)}>
                    {item.desc}
                  </div>
                </div>
                <div className="footer-box">
                  <div className="container">
                    <AppstoreOutlined className="icon"/>
                    <span className="title">分类：</span>
                    {
                      this.splitString(item.type).map((tItem, tIndex) => {
                        return(
                        <Tag color="#87d068" key={tIndex}>
                          <a className="item" href="/type">{tItem}</a>
                        </Tag>
                        )
                      })
                    }
                  </div>
                  <div className="container">
                  <TagOutlined className="icon"/>
                    <span className="title">标签：</span>
                    {
                      this.splitString(item.label).map((lItem, lIndex) => {
                        return(
                        <Tag color="#2db7f5" key={lIndex}>
                          <a className="item" href="/label">{lItem}</a>
                        </Tag>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
        <div className="pagination-box">
          <Pagination
            total={85}
            showSizeChanger
            showQuickJumper
            onChange={this.onChangePagination}
            showTotal={total => `共 ${total} 条`}
          />
        </div>
      </div>
    )
  }
}

export default Home
