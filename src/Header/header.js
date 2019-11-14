import React from 'react';
//import './header.css';因为启用了模块化 所以不能用
import{BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import LoginPage from '../Login/login';
import{Button,Icon,Menu,Dropdown} from 'antd';
import TeamPage from './Team/team';
import BasePage from './Guide/Base/base';
var HeaderCss=require('./header.css')
// var menu = <Menu>
// <Menu.Item key="0">
//   <a href="http://www.alipay.com/">简历制作
//   </a>
// </Menu.Item>
// {/* <SubMenu title="简历制作">
//       <Menu.Item>基本要求</Menu.Item>
//       <Menu.Item>格式与内容</Menu.Item>
//     </SubMenu> */}
// <Menu.Divider/>
// <Menu.Item key="1">
//   <a href="http://www.taobao.com/">面试技巧</a>
// </Menu.Item>
// <Menu.Divider/>
// <Menu.Item key="3">行业测评</Menu.Item>
// </Menu>;
const { SubMenu } = Menu;

const menu = (
  <Menu>
      <SubMenu title="简历制作">
      <Menu.Item>
      <a href='/base/jbyq'>基本要求</a>
     </Menu.Item>
      <Menu.Item> <a href='/base/gsylr'>格式与内容</a></Menu.Item>
      <Menu.Item> <a href="/base/cjwt">常见问题</a></Menu.Item>
    </SubMenu>
    <SubMenu title="面试技巧">
      <Menu.Item><a href='/base/msqzb'>面试前准备</a></Menu.Item>
      <Menu.Item><a href='/base/hylj'>行业了解</a></Menu.Item>
      <Menu.Item><a href='/base/rhhdwt'>如何回答问题</a></Menu.Item>
       <Menu.Item><a href='/base/rhtw'>如何向面试官提问</a></Menu.Item>
       <Menu.Item><a href='/base/mszj'>面试总结</a></Menu.Item>
       <Menu.Item><a href='/base/moni'>模拟面试预约</a></Menu.Item>
    </SubMenu>
    <SubMenu title="行业测评">
      <Menu.Item><a href='/base/kspc'>开始测评</a></Menu.Item>
      <Menu.Item><a href='/base/cpz;'>测评种类</a></Menu.Item>
    </SubMenu>
  </Menu>
);
const menu1 = (
  <Menu>
    <Menu.Item>
     
     <a href='/xwzx/hd'>活动</a>

    </Menu.Item>
    <Menu.Item>
     
     <a href='/xwzx/xw'>新闻</a>

    </Menu.Item>
   
  
  </Menu>
);
export default class Header extends React.Component{

    render(){
        return(
            <div className={HeaderCss.header}>   
                <div className={HeaderCss.i}>
                    <img src='image/hope.png' width={90} height={90}/>
                </div>
                <div className={HeaderCss.i1}><img src='image/word.png' width={150} height={90}/></div>
                <div className={HeaderCss.s}>大学生就业指导中心</div>
                <div className={HeaderCss.p}>             
                 <BrowserRouter>
                <Link to='/login'><Button type='default' shpe='round' >登录</Button></Link>
                <Route path='/login' component={LoginPage}></Route>
                 </BrowserRouter>
                 <Link to='/enorll'><Button type='default' shpe='round' >注册</Button></Link>
               </div>
               <div className={HeaderCss.right}>
                   <div className={HeaderCss.we}><Icon type="team"  style={{ fontSize:25 } } />
                   <BrowserRouter>
                <Link to='/team'>关于我们</Link>
                <Route path='/team' component={TeamPage}></Route>
                 </BrowserRouter>
                   </div>
                   <div className={HeaderCss.message}><Icon type="message"  style={{ fontSize:20 } }  />
                   <Link to='/zhaopin'>招聘信息</Link></div>
         
  <div className={HeaderCss.messag}>
  <Icon type='search'  style={{ fontSize:25 } }  className={HeaderCss.se}/>
  <Dropdown overlay={menu}>
    <p size='50' type="default" className={HeaderCss.p1}>
    <a href='/base/jbyq'>就业指导 </a>
    </p>
  </Dropdown>
  </div>
  <div className={HeaderCss.new}>
   <img src='image/news.png' width={26} height={26} className={HeaderCss.p4}/>
  <Dropdown overlay={menu1}>
    <Link to='/xwzx'>新闻中心</Link>
  </Dropdown>
  </div>
                   <div className={HeaderCss.home}><Icon type="home"  style={{ fontSize:20 } } />
                   <a href='http://www.swjtuhc.cn/'>返回主站</a></div>
               </div>
            </div>
        )
    }
} 
    