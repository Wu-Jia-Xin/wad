import React from 'react';
import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;


var monicss=require('./moni.css')

export default class All6 extends React.Component{

    render(){function onChange(date, dateString) {
        console.log(date, dateString);
      }
        return(
            <div className={monicss.body}> 
                <h1>模拟面试</h1>
              <DatePicker onChange={onChange} />

            </div>
        )
    }
}