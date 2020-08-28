import React, { Component }  from 'react';
import {
  EnvironmentOutlined,
  IdcardOutlined,
  LaptopOutlined
} from '@ant-design/icons';
import './index.scss'
class Persional extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'YoLinDeng',
      sign: '等到秋叶终于金黄，等到华发悄然苍苍~',
      linkList: [
        {
          icon: require('@/assets/images/github.png'),
          link: 'https://github.com/YoLinDeng',
          title: 'github'
        },
        {
          icon: require('@/assets/images/touch-icon.png'),
          link: 'https://segmentfault.com/u/yolindeng',
          title: 'segmentfault'
        },
        {
          icon: require('@/assets/images/juejin-icon.png'),
          link: 'https://juejin.im/user/1574156383565319',
          title: 'juejin'
        }
      ]
    }
  }
  render() {
    return(
      <div className="persional-wrapper">
        <div className="top-bg">
          <div className="avatar-container">
            <img src={require('@/assets/images/luff.jpg')} alt="头像" className="avatar-icon"/>
          </div>
        </div>
        <div className="info-container">
          <div className="name">{ this.state.name }</div>
          <div className="sign">{ this.state.sign }</div>
          <div className="detail-info">
            <div className="address item">
              <EnvironmentOutlined className="address-icon"/>
              <span className="text">广东广州</span>
            </div>
            <div className="school item">
              <IdcardOutlined className="school-icon"/>
              <span className="text">广东药科大学（GDPU）</span>
            </div>
            <div className="profession item">
              <LaptopOutlined className="profession-icon"/>
              <span className="text">前端工程师</span>
            </div>
          </div>
        </div>
        <div className="link-container">
          {
            this.state.linkList.map((item, index) => {
              return (
                <div className="link-item" key={index}>
                  <a href={item.link} title={item.title}>
                    <img src={item.icon} alt="icon" className="icon"/>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Persional