import React from 'react';

var hdcss=require('./hd.css')
export default class HD extends React.Component {
    render(){
        return(

            <div className={hdcss.mili}>
                <div style={{marginBottom:50}}>
                <h1>开学迎新</h1>
                <span style={{marginRight:25}}>开始时间：8月24</span>
                <span>结束时间：8月26</span>
                </div>
                <div>

                    <h1>xxxx公司</h1>
                    <span style={{marginRight:25}}>开始时间：8月24</span>
                <span>结束时间：8月26</span>
                </div>
            </div>
        )
    }}