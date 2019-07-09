import React, { Component } from 'react';
import AdminHeader from './../top-menu/admin-header';
import LeftMenu from './../left-menu/left-menu';
import AdminFooter from './../footer/admin-footer';
import HomeBody from './home-page/container/home-body/home-body';

class Home extends Component {
  render() {
    return (
      <div>
        <AdminHeader/>
        <LeftMenu/>
        <HomeBody/>
        <AdminFooter/>
      </div>
    )
  }
}

export default Home;