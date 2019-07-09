import React, { Component } from 'react';
import { Select } from 'antd';
const { Option } = Select;
const children = [];

for (let i = 2019; i >= 2000; i--) {
  children.push(<Option key={i}>{i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}
class FilterHomePage extends Component {
  
  render() {
    return (
      <div className="response">
        <div className="form-group inline pd-right-20">
          <Select defaultValue="Xếp hạng" onChange={handleChange} >
            <Option value="jack">Top All</Option>
            <Option value="jack">Top tháng</Option>
            <Option value="jack">Mới nhất</Option>
            <Option value="jack">Truyện Full</Option>
            <Option value="jack">Mới cập nhật</Option>
            <Option value="jack">Truyện mới</Option>
            <Option value="lucy">Đọc nhiều nhất</Option>
          </Select>
        </div>
        <div className="me form-group inline pd-right-20">
          <Select defaultValue="Thể loại" onChange={handleChange} >
            <Option value="jack">Trinh thám</Option>
          </Select>
        </div>
        <div className="me form-group inline pd-right-20">
          <Select defaultValue="Quốc gia" onChange={handleChange} >
            <Option value="jack">Nhật bản</Option>
            <Option value="jack">Hàn quốc</Option>
            <Option value="jack">Việt nam</Option>
            <Option value="jack">Mỹ</Option>
          </Select>
        </div>
        <div className="me form-group inline pd-right-20">
          <Select  defaultValue="Năm" onChange={handleChange} >
            {children}
          </Select>
        </div>
        <div className="me form-group inline pd-right-20">
          <Select defaultValue="xắp sếp" onChange={handleChange} >
            <Option value="jack">a-z</Option>
            <Option value="lucy">z-a</Option>
          </Select>
        </div>
      </div>
    )
  }
}

export default FilterHomePage;