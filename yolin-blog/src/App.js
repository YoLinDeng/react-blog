import React, { Component } from 'react';
import Home from './views/home/Home.js'
import About from './views/about/About.js'
import { BrowserRouter as Router,Route,Switch,NavLink,Redirect } from 'react-router-dom'
// 导入子组件
class App extends Component {
  render() {
    return (
      <div className="App" >    
        <Router>          
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/produce/:id" component={Produce}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Router>  
      </div>
    );
  }
}
function Produce({match}){
  return (<h1>我是产品:{match.params.id}</h1>);
}
function NoMatch({location}){
  return (<h1>页面没有找到{location.pathname}</h1>);
}
function Detail({location,match}){
  return (<div>
      <div><NavLink to={match.url+'/arg'}>参数</NavLink> | <NavLink to={match.url+'/com'}>评论</NavLink> | </div>
      <hr/>
      <Switch>
      <Route path={match.url+'/arg'} component={Arg}></Route>
      <Route path={match.url+'/com'} component={Com}></Route>

      <Redirect from={match.url} to={match.url+'/arg'}/>
      </Switch>
    </div>);
}
function Arg(){
  return (<h1>我是Arg </h1>);
}
function Com(){
  return (<h1>我是com</h1>);
}
export default App;