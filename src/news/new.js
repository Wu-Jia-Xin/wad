import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Input } from 'antd';
import XW from './xw/xw';
import HD from './hd/hd';
import GG from './gg/gg';

var newcss=require('./new.css')
const { Search } = Input;

export default class News extends React.Component {
    render(){
        return(<div>
<BrowserRouter basename='/xwzx'>

    <Switch>
<Route path='/xw' component={XW}></Route>
<Route path='/hd' component={HD}></Route>
<Route path='/' component={XW}></Route>
<Route path='/gg' component={GG}></Route>
    </Switch>
<div className={newcss.alt}>新闻中心</div>
<div className={newcss.hea}><h2><Link to='/xw'>新闻</Link></h2></div>
<div className={newcss.hea}><h2><Link to='/hd'>活动</Link></h2></div>

<Search className={newcss.so}
      placeholder="请搜索"
      onSearch={value => console.log(value)}
      style={{ width: 700 }}
    />
</BrowserRouter>
        </div>)
    }
}