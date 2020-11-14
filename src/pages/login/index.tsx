import React from 'react';
import FullLayout from '../../layout/fullLayout';
import background from '../../asserts/background.svg';
import './index.scss';
import { Form, Input, Button, Checkbox, Tabs, Row, Col } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  AlipayCircleFilled,
  WeiboCircleFilled,
  TaobaoCircleFilled
} from '@ant-design/icons';
import logo from '../../asserts/logo.svg';
import Footer from '../../components/footer';
const { TabPane } = Tabs;
const Login = () => {
  return (
    <FullLayout backgroundImg={background}>
      <div className="login__container">
        <Row align="middle" justify="center">
          <img className="login__logo" src={logo} />
          <span className="login__title">Ant Design</span>
        </Row>
        <Row align="middle" justify="center">
          <span className="login__tip">Ant Design 是西湖区最具影响力的 Web 设计规范</span>
        </Row>
        <Row align="middle" justify="center">
          <Tabs defaultActiveKey="1">
            <TabPane tab="账户密码登录" key="1">
              <PasswordLogin />
            </TabPane>
            <TabPane tab="手机号登录" key="2">
              <PhoneLogin />
            </TabPane>
          </Tabs>
        </Row>
        <Footer />
      </div>
    </FullLayout>
  );
};
const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};
const PhoneLogin = () => {
  return (
    <Form name="phoneLogin" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item name="username" rules={[{ required: true, message: '请输入账户' }]}>
        <Input
          className="phone__input"
          size="large"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="手机号"
        />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="验证码"
          className="captcha__input"
          size="large"
        />
        <Button>获取验证码</Button>
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>
        <a href="">忘记密码</a>
      </Form.Item>
      <Form.Item>
        <Button className="password__button" size="large" type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
      <Form.Item>
        <Row justify="space-between">
          <Form.Item label="其他登录方式" colon={false} className="login__iconGroup">
            <AlipayCircleFilled className="login__icon" />
            <WeiboCircleFilled className="login__icon" />
            <TaobaoCircleFilled className="login__icon" />
          </Form.Item>
          <a href="">注册账户</a>
        </Row>
      </Form.Item>
    </Form>
  );
};
const PasswordLogin = () => {
  return (
    <Form name="passwordLogin" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item name="username" rules={[{ required: true, message: '请输入账户' }]}>
        <Input
          size="large"
          className="password__input"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="用户名：admin or user"
        />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码：123456"
          className="password__input"
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Row justify="space-between">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <a href="">忘记密码</a>
        </Row>
      </Form.Item>
      <Form.Item>
        <Button size="large" className="password__button" type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
      <Form.Item>
        <Row justify="space-between">
          <Form.Item label="其他登录方式" colon={false} className="login__iconGroup">
            <AlipayCircleFilled className="login__icon" />
            <WeiboCircleFilled className="login__icon" />
            <TaobaoCircleFilled className="login__icon" />
          </Form.Item>
          <a href="">注册账户</a>
        </Row>
      </Form.Item>
    </Form>
  );
};
export default Login;
