import React from 'react';
import {Input,Icon,Button} from 'antd';
import{BrowserRouter,Link,Route} from 'react-router-dom';
import '../Enroll/enorll'
var LoginCss=require('./login.css')
export default class LoginPage extends React.Component{
  
goBack (){
  window.history.go(-1);
}
  constructor(props){
    super(props);
    this.state={
      telError:null,
      passwordError:null,
      imageShow:true
    }
  }
  //手机号码判断
  telCheck(event){
    this.tel=event.target.value
    console.log(this.tel)
    var reg = new RegExp("[1]{1}[3,4,5,8]{1}[0-9]{9}");
    if(reg.test(this.tel)==false){
      this.setState({
        telError:'请输入正确的手机号'
      })
      }else{
        this.setState({
          telError:''
        })
    }
  }
  //密码判断
  passwordCheck(event){
    this.password=event.target.value
    var reg = /[\w\d]{6,}/g;
    if (reg.test(this.password)== false ){
      this.setState({
      passwordError: "密码为6-20位数字或字母或下划线!"
      })
      } else {
      this.setState({
      passwordError: ""
      })
      }
      }
    //是否记住密码
isRemember(){
  this.setState({
  imageShow:!this.state.imageShow
  })
  }
  render(){
    return(
   <div className={LoginCss.loginbox}>
     <div className={LoginCss.back}><p onClick={()=>this.goBack()}><Icon type='left'/>返回</p></div>
     <div className={LoginCss.headimg}>
       <img src='image/photo.png' width={60} height={60}/>
       </div>
       <ul className={LoginCss.ul}>
         <li className={LoginCss.userTel}>
         <Input placeholder="请输入手机号" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onBlur={(event)=>this.telCheck(event)}/>
         </li>
         <li className={LoginCss.liAll}>
         <span className={LoginCss.telPrompt}>{this.state.telError}</span>
         </li>
         <li className={LoginCss.userTel}>
         <Input.Password placeholder="请输入密码" prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} onBlur={(event)=>this.passwordCheck(event)}/>
         <li className={LoginCss.liAll}>
         <span className={LoginCss.telPrompt}>{this.state.passwordError}</span>
         </li>
         <li className={LoginCss.rememberLi}>
           <img src='image/quan.png'  width={10} height={10} onClick={()=>this.isRemember}/>
           <a herf="#" className={LoginCss.rememberI}>记住手机号</a>
           <a herf="#" className={LoginCss.forgetI}>忘记密码</a>
         </li>
         <li className={LoginCss.liAll}>
           <button className={LoginCss.login}>登录</button>
         </li>
         </li>
       </ul>
     <div className={LoginCss.register}>
      
       <Link to="/enorll">快速注册</Link> 
      
     
     </div>
   </div>
    )
  }    
  }
