import React from 'react';

var ggcss=require('./gg.css')
export default class GG extends React.Component {
    render(){
        return(
            <div>
                <div className={ggcss}>
                    <span>2019年8月1日</span>
                    <h2>双选会</h2>
                    <span>活动时间：11月11日</span>
                    <div>地点：西南交通大学希望学院</div>
                    <div className={ggcss}>活动进行中</div>
                </div>
            </div>
        )  
    }}