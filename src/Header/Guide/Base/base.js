import React from 'react';
import{Menu,Icon} from'antd'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import Aoe from '../jbyq/jbyq';
import Apple from '../gsyyq/gsyyq';
import ALL from '../cjwt/cjwt';
import ALL1 from '../msqzb/msqzb';
import All2 from '../hylj/hylj';
import All3 from '../rhhdwt/rhhdwt';
import All4 from '../rhtw/rhtw';
import ALL5 from '../mszj/mszj';
import All6 from '../moni/moni';
import All7 from '../kspc/kspc';
import All8 from './cpzl/cpzl';

const { SubMenu } = Menu;
var BaseCss=require('./base.css')
export default class BasePage  extends React.Component{
    goBack (){
        window.history.go(-1);
      }
      handleClick = e => {
        console.log('click ', e);
      };    
    render(){
        return(
            <div>
          
               <div className={BaseCss.p3}><img src={require('./../../../photo/p3.jpg')} width={2000}/></div>
             
               <div className={BaseCss.menu}>
               <BrowserRouter basename='/base'>
         <Switch>
         <Route path="/" exact component={Aoe}></Route>
         <Route path='/jbyq' component={Aoe}></Route>
         <Route path='/gsylr'exact component={Apple}></Route>
         <Route path="/cjwt"exact component={ALL}></Route>
         <Route path='/msqzb'exact component={ALL1}></Route>
         <Route path='/hylj'exact  component={All2}></Route>
         <Route path='/rhhdwt'exact component={All3}></Route>
         <Route path='/rhtw'exact component={All4}></Route>
         <Route path="/mszj"exact component={ALL5}></Route>
         <Route path='/moni'exact component={All6}> </Route>
         <Route path='/kspc'exact component={All7}></Route>
         <Route path="/cpzl"exact component={All8}></Route>
         </Switch>
                 <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >  
      
          <SubMenu key="sub1"    title={
              <span>简历制作</span>}>
            <Menu.Item key="1"><Link to="/jbyq">基本要求</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/gsylr'>格式与内容</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/cjwt'>常见问题</Link></Menu.Item>
            </SubMenu>
          <SubMenu key="g2" title="面试技巧">
          <Menu.ItemGroup >
          <Menu.Item key="1"><Link to='/msqzb'>面试前准备</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/hylj'>行业了解</Link></Menu.Item>
          <Menu.Item key="3"><Link to='/rhhdwt'>如何回答问题</Link></Menu.Item>
          <Menu.Item key="4"><Link to='/rhtw'>如何向面试官提问</Link></Menu.Item>
          <Menu.Item key="5"><Link to='/mszj'>面试总结</Link></Menu.Item>
          <Menu.Item key="6"><Link to='/moni'>模拟面试</Link></Menu.Item>
          </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key="g3" title="行业测评"> 
          <Menu.ItemGroup >
          <Menu.Item key="1"><Link to="/kspc">开始测评</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/cpzl'>测评种类</Link></Menu.Item>
          </Menu.ItemGroup>
          </SubMenu></Menu>
         

         </BrowserRouter>
            </div>
            </div>
        )
    }
}