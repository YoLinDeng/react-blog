import React, { Component }  from 'react';
import { Row, Col, Menu  } from 'antd';
import { Link, withRouter } from 'react-router-dom'
import { HomeOutlined, FolderOpenOutlined, AppstoreOutlined, PushpinOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import './index.scss'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory() // history模式

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: '',
      current: 'home'
    }
  }
  handleClick = e => {
    this.setState({ current: e.key });
  }
  componentDidMount = () => {
    let moren = this.props.location.pathname
    let text = moren.substring(moren.lastIndexOf('/') + 1, moren.length)
    !['home', 'study', 'type', 'label', 'about', 'search'].includes(text) && (text = 'home')
    this.setState({
      current: text
    })
    history.listen((event) => {
      let test = event.pathname
      let text = test.substring(test.lastIndexOf('/') + 1, test.length)
      this.setState({
        current: text
      })
    })
  }
  render() {
    const { current } = this.state;
    return(
      <div className="header-wrapper">
         <Row>
          <Col span={18} push={6} className="right-box">
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/home">首页</Link>
              </Menu.Item>
              <Menu.Item key="study" icon={<FolderOpenOutlined />}>
                <Link to="/study">学习</Link>
              </Menu.Item>
              <Menu.Item key="type" icon={<AppstoreOutlined />}>
                <Link to="/type">分类</Link>
              </Menu.Item>
              <Menu.Item key="label" icon={<PushpinOutlined />}>
                <Link to="/label">标签</Link>
              </Menu.Item>
              <Menu.Item key="about" icon={<UserOutlined />}>
                <Link to="/about">关于</Link>
              </Menu.Item>
              <Menu.Item key="search" icon={<SearchOutlined />}>
                搜索
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    )
  }
}
export default withRouter(Header)