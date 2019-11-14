import React from 'react';
import {Button,Icon} from 'antd'
var TeamCss=require('./team.css')
export default class TeamPage extends React.Component{
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
    render(){
        return(
            <div className={TeamCss.main}>
                <div>
                    <img src='image/one.jpg' width={1800} height={250}/>
                    <div className={TeamCss.back}><p onClick={()=>this.goBack()}>首页<Icon type='right'/><a>关于我们</a></p></div>
                    <div className={TeamCss.h2}><p>愿景</p></div>
                    <div className={TeamCss.one}><p>
                        大学就业处致力于为本校学生提供优质的升学及就业方面的服务，向国内外优秀企业输送本校综合素质一流的人才，同时也为世界顶尖学府输送本校学术成绩斐然的精英学子。</p></div>
                    <div className={TeamCss.h2}><p>学生服务</p></div>
                    <div className={TeamCss.one}>
                      <ul>
                        <li>
                        职业测评<br/>
                        大学就业处为学生提供各类型职业方面测评，包括能力测评及性格测评。</li><br/>
                        <li>生涯规划<br/>
                        大学就业处拥有国际认证的职业生涯测评师为学生提供一对一咨询。</li><br/>
                        <li>生涯规划<br/>
                        大学就业处拥有国际认证的职业生涯测评师为学生提供一对一咨询。</li><br/>
                      <li>招聘信息<br/>
                        大学就业处与各大企业及招聘平台合作，为学生提供实习和全职招聘等信息</li>
                      </ul>
                    </div>
                </div>
            </div>
        )
    }
}
{/* <Button icon='left' type='dashed' onClick={()=>this.goBack()}>返回</Button> */}