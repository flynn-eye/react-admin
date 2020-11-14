import React from 'react';
import { Row, Col } from 'antd';
import './index.scss';
import { GithubOutlined, CopyrightOutlined } from '@ant-design/icons';
const Footer = () => {
  return (
    <div className="footer__container">
      <Row justify="center">
        <Col>Ant Design Pro</Col>
        <GithubOutlined className="footer__githubLogo" />
        <Col>Ant Design</Col>
      </Row>
      <Row justify="center">
        <span>Copyright</span>
        <CopyrightOutlined className="footer__copyright" />
        <span>2019 蚂蚁金服体验技术部出品</span>
      </Row>
    </div>
  );
};
export default Footer;
