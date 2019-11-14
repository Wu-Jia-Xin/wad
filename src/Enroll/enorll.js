import React from 'react';
import { Input,Button, Upload, Icon, message} from 'antd'
import{BrowserRouter,Route,Link} from 'react-router-dom';
import { shape } from 'prop-types';
var EnrollCss=require("./enorll.css");
function getBase64(img, callback) {
     const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 500 / 500 < 2;
    if (!isLt2M) {
      message.error('照片必须小于2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
export default class EnrollPage extends React.Component {
    state = {
        loading: false,
      };
    
      handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };
    
    constructor(props) {
        super(props);
        this.state = {
            username: '', //账号
            pwd: '', // 密码
            pwdConfirm: '', // 确认密码
            type: 'worker', // 用户类型 默认求职者
        }
    }
    render() {
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus' }  />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
          const { imageUrl } = this.state;
        return (
            <div className={EnrollCss.m}>
            <div className={EnrollCss.e}>
            <div className={EnrollCss.up}><Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%'}} /> : uploadButton}
          </Upload></div>
                    <div className={EnrollCss.one}>用户名<Input  placeholder="请输入手机号" size='large' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={value => this.handleChange('username', value)}/></div>
                    <div className={EnrollCss.two} >验证码<Input placeholder="请输入验证码"  size='large' ></Input><div className={EnrollCss.b}><Button size='large'>获取验证码</Button></div></div>
                    <div className={EnrollCss.three}>密码<Input.Password  placeholder="请输入密码" size='large' prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }}/>} onChange={value => this.handleChange('pwd', value)}/></div>
                    <div className={EnrollCss.four}>确认密码<Input.Password placeholder="确认密码" size='large' prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }}/>} onChange={value => this.handleChange('pwdConfirm', value)}/></div>
                    <div className={EnrollCss.login}><Button type="primary">注册</Button></div>
                    <div className={EnrollCss.go}><Button onClick={this.handleGoLogin.bind(this)} type="primary">已有账号，去登录</Button></div>
            </div>
            </div>
        
        )
    }

    /*
    *     去登录
    * */
    handleGoLogin() {
        this.props.history.push('/login')
    }

    /*
    *     绑定表单值
    * */
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
}

