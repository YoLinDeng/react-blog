import './index.scss'
import React, { Component }  from 'react'
import { Tag, Pagination, Button } from 'antd';
import { ClockCircleOutlined, AppstoreOutlined, TagOutlined, RedoOutlined } from '@ant-design/icons';

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
          createTime: '2020-8-30',
          updateTime: '2020-9-1',
          type: '前端,后端,移动端',
          label: 'vue,react,eggg,ts'
        },
        {
          id: 2,
          title: 'egg.js+mongoose实现二级评论',
          desc: 'egg.js+mongoose实现二级评论egg.js+mongoose实现二级评论egg.js+mongoose实现二级评论egg.js+mongoose实现二级评论egg.js+mongoose实现二级评论',
          createTime: '2020-8-30',
          updateTime: '2020-9-1',
          type: '前端,后端,移动端',
          label: 'vue,react,eggg,ts,js'
        }
      ]
    }
  }
  splitString(str) {
    return str.split(',')
  }
  onChangePagination(page, pageSize) {
    console.log(page, pageSize)
  }
  goToArticle(id) {
    this.props.history.push(`/article/${id}`)
  }
  render() {
    return(
      <div className="home-wrapper">
        {
          this.state.articleList.map((item, index) => {
            return(
              <div className="article-item" key={index}>
                <div className="top">
                  <div className="title" onClick={this.goToArticle.bind(this, item.id)}>{item.title}</div>
                  <div className="time-box">
                    <ClockCircleOutlined />
                    <span className="text">{item.createTime}</span>
                    <RedoOutlined className="update-icon"/>
                    <span className="text">{item.updateTime}</span>
                  </div>
                </div>
                <div className="center-box">
                  <div className="desc" onClick={this.goToArticle.bind(this, item.id)}>
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
                  <div className="footer-right-box">
                    <span className="read text">阅读（100）</span>
                    <span className="comment text">评论（10）</span>
                    <Button type="primary" className="read-btn" onClick={this.goToArticle.bind(this, item.id)}>阅读全文</Button>
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
