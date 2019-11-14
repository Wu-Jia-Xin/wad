import React from 'react';

import { Input } from 'antd';

var zhaopicss=require('./zhaopi.css')
const { Search } = Input;

export default class Action extends React.Component {
    render(){
        return(<div>

<div className={zhaopicss.alt}>招聘信息</div>
<div className={zhaopicss.hea}><h2>招聘信息</h2></div>
<Search className={zhaopicss.so}
      placeholder="请搜索"
      onSearch={value => console.log(value)}
      style={{ width: 700 }}
    />
<div className={zhaopicss.nnn}>
<div>xxx有限公司</div>
<div>xxxx有限公司秋招（简历投至邮箱）</div>
<div>   
    <span style={{marginRight:25}}>xx市</span>
    <span style={{marginRight:25}}>xx职位</span>
    <span>xxx学历</span>
</div>
<div> 
<span style={{marginRight:25 } } >发布时间：9999年99月99日</span>
<span > 截止时间：xxxx年99月99日 </span>
</div>
<div className={zhaopicss.fot}><a style={{fontSize:25} } href="#">点击申请</a></div>
</div>
        </div>)
    }
}