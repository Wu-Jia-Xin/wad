import React from 'react';
import Product from '../Product/product';


export default class BuyPage extends React.Component{
//buy页面下获取数据
getProductList(){
   let dataList=[{
  id:1,
  name:"电脑",
  price:"4335",
  descibe:"华硕"
   },{
    id:2,
    name:"冰箱",
    price:"2335",
    descibe:"格力"
     },{
        id:3,
        name:"电饭煲",
        price:"335",
        descibe:"友家"
         }]
        return dataList;
}

    render(){
        let dataList=this.getProductList();
        return(
           dataList.map((item,i)=>(
               <Product product={item}></Product>
           ))
        )
    }
}