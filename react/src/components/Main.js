require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MessageBox from './MessageBox';
import InputBox from './InputBox';
import {Link} from 'react-router';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import loginAction from '../actions/LoginAction';
import loginStore from '../stores/LoginStore';

class AppComponent extends React.Component {
  constructor() {
    super();
    loginAction.init();
    setTimeout(()=>{
      console.log(this.state);
    },200);
  }

  logout() {
    loginAction.logout();
  }

  render() {
    if (this.state.login) {
      return (
        <div className="index">
          <h1>{this.state.login.username}</h1>
          <h1>ChatRoom</h1>
          <MessageBox/>
          <InputBox/>
          <button onClick={this.logout.bind(this)}>logout</button>
        </div>
      );
    }
    return (
      <div className="index">
        <h1>ChatRoom</h1>
        <MessageBox/>
        <InputBox/>
        <h3><Link to="/login">登录</Link> <Link to="/register">注册</Link></h3>
      </div>
    )
  }
}

AppComponent.defaultProps = {};

ReactMixin.onClass(AppComponent, Reflux.connect(loginStore, 'login'));

export default AppComponent;
