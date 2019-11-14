import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homepage';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import LoginPage from './Login/login';
import EnrollPage from './Enroll/enorll';
import BasePage from './Header/Guide/Base/base';
import ALL from './Header/Guide/cjwt/cjwt';
import Action from './zhaopi/zhaopi';
import News from './news/new';
class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter basename='react-example'>
                    <Switch>
                     
                        <Route path='/' exact component={HomePage}></Route>
                        <Route path='/homepage' component={HomePage}></Route>
                        <Route path='/login' component={LoginPage}></Route>
                        <Route path='/enorll' component={EnrollPage}></Route>
                        <Route path='/base' component={BasePage}></Route>
                     <Route path='/zhaopin' component={Action}></Route>
                     <Route path="/xwzx" component={News}></Route>
                        <Redirect to='/'></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
