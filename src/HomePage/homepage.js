import React from 'react';
import Header from './../Header/header';
import Footer from './../Footer/footer';
import {Carousel } from 'antd';
import{BrowserRouter,Route,Link} from 'react-router-dom';
import BuyPage from './Buy/buy';
import SalePage from './Sale/sale';
import LoginPage from '../Login/login';
var HomePageCss=require('./homepage.css')
export default class HomePage extends React.Component{
   
function(i) {
    


    return this.onChange[i];

  }
    render(){
        return(
            <div>
                <Header/>
               <div>
                    {/* <Button shape='round' icon='forward' type='primary'>前进按钮</Button>
                    {/* <BrowserRouter basename='homepage'>
                        <Link to='/buy'>我要买</Link>
                        <Link to='/sale'>我要卖</Link>
                    <Route path='/buy' component={BuyPage}></Route>
                    <Route path='/sale' component={SalePage}></Route>
                    <Route path='/login' component={LoginPage}></Route>
                    </BrowserRouter> */}             
                    </div>
                    <div className={HomePageCss.photo}>
                    <Carousel autoplay="true">                       
    <div><img src='image/news.jpg' width={2000} height={600}/></div>
    <div><img src='image/news2.jpg' width={2000} height={600}/></div>
    <div><img src='image/news3.jpg' width={2000} height={600}/></div>
    <div><img src='image/p2.jpg' width={2000} height={600}/></div>
  </Carousel>  
   </div>   
                    <Footer/>
            </div>
        )
    }
}