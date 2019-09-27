import React from 'react';
import { Form, Icon, Input, Button, Radio } from 'antd';

class RForm extends React.Component{
  component() {
    this.props.form.validateFields();
  }

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
    <div style={{width: '500px'}}>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="用户名">
          {
            getFieldDecorator('username', {
              rules: [{required: true, message: '请输入用户名'}]
            })(
            <Input
              placeholder="用户名" 
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} />
            )
          }
        </Form.Item>
        <Form.Item label="密码">
          {
            getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码'}]
            })(
              <Input 
                prefix={<Icon type="lock" style={{color: 'rgba(0, 0, 0, 0.25)'}} />} 
                type="password"
                placeholder="密码"
                />
                )
          }
        </Form.Item>
        <Form.Item label="水果">
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            确认
          </Button>
        </Form.Item>
      </Form>
    </div>
    )
  }
};

export default Form.create({name: 'RForm'})(RForm);