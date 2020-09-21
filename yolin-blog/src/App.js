import React, { Component } from 'react';
// import Home from '@/views/home'
// import Study from '@/views/study'
// import Photos from '@/views/photos'
// import Archives from '@/views/archives'
// import About from '@/views/about'
// import Article from '@/views/article'
import { Layout } from 'antd'
import Header from '@/components/Header'
import Persional from '@/components/Persional'
import { withRouter} from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import router from "./router/index.js";
const { Footer, Content, Sider} = Layout;
// 导入子组件
class App extends Component {
  render() {
    return (
      <div className="App" >
        <Layout>
          <Sider>
            <Persional/>
          </Sider>
          <Content>
            <Header />
            <div className="main">
              <div className="router-view">
                {/* <Switch>
                  <Route path="/home" exact component={Home}></Route>
                  <Route path="/study" component={Study}></Route>
                  <Route path="/photos" component={Photos}></Route>
                  <Route path="/archives" component={Archives}></Route>
                  <Route path="/about" component={About}></Route>
                  <Route path="/article/:id" component={Article}></Route>
                  <Redirect from="/*" to="/home"></Redirect>
                </Switch> */}
                {renderRoutes(router)}
              </div>
              <Footer>
                <div className="copyright">
                  © 2020 YoLinDeng
                </div>
                <div className="blog-desc">
                  the blog by YoLinDeng
                </div>
              </Footer>
            </div>
          </Content> 
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);