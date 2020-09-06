import React, { Component } from 'react';
import Home from '@/views/home'
import Study from '@/views/study'
import Photos from '@/views/photos'
import Archives from '@/views/archives'
import About from '@/views/about'
import { Layout } from 'antd'
import Header from '@/components/Header'
import Persional from '@/components/Persional'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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
            <Router>
              <Header />
              <div className="main">
                <Switch>
                  <Route path="/home" exact component={Home}></Route>
                  <Route path="/study" component={Study}></Route>
                  <Route path="/photos" component={Photos}></Route>
                  <Route path="/archives" component={Archives}></Route>
                  <Route path="/about" component={About}></Route>
                  <Redirect from="/*" to="/home"></Redirect>
                </Switch>
                <Footer>
                  <div className="copyright">
                    © 2020 YoLinDeng
                  </div>
                  <div className="blog-desc">
                    the blog by YoLinDeng
                  </div>
    	          </Footer>
              </div>
            </Router>
          </Content> 
        </Layout>
      </div>
    );
  }
}

export default App;