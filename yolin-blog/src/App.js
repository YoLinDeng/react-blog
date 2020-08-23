import React, { Component } from 'react';
import Home from '@/views/home'
import Study from '@/views/study'
import Type from '@/views/type'
import Label from '@/views/label'
import About from '@/views/about'
import { Layout } from 'antd'
import Header from '@/components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const { Footer, Content } = Layout;
// 导入子组件
class App extends Component {
  render() {
    return (
      <div className="App" >
        <Layout>
          <Content>
            <Router>
              <Header />       
              <Switch>
                <Route path="/home" exact component={Home}></Route>
                <Route path="/study" component={Study}></Route>
                <Route path="/type" component={Type}></Route>
                <Route path="/label" component={Label}></Route>
                <Route path="/about" component={About}></Route>
              </Switch>
            </Router>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;