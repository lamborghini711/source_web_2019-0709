import React, { Component } from 'react';
import DeatailHeader from './../detail-header/header'
import DetailFooter from '../detail-footer/detail.footer';
import DetailBody from '../detail-body/detail-body';
import { BackTop } from 'antd';

class BookDetailBody extends Component {
  render() {
    return (
      <div className="content-wrapper body-bg pd-tb-20 pd-lr-40" style={{ minHeight : '1300px'}}>
        <section className="content-header">
          <DeatailHeader/>
          <DetailBody/>
          <DetailFooter/>
          <div>
            <BackTop />
            <strong style={{ color: '#000' }}></strong>
          </div>
        </section>
      </div>
    );
  }
}

export default BookDetailBody;