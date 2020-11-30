import React, { useState, Dispatch, SetStateAction } from 'react';
import './index.scss';
import { Row, Col, Dropdown, Menu } from 'antd';
import {
  TranslationOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import avatar from '../../asserts/header.png';
import HeaderSearch from '../headerSearch';
import logo from '../../asserts/logo.svg';
interface IProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
  handleCollapsed: () => void;
}
const Header = (props: IProps) => {
  const { isMenuOpen, setIsMenuOpen, isMobile, handleCollapsed } = props;
  let OpenIcon = null;
  const openMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
    } else {
      handleCollapsed();
    }
  };
  if (isMenuOpen) {
    OpenIcon = <MenuFoldOutlined className="menuFold" onClick={openMenu} />;
  } else {
    OpenIcon = <MenuUnfoldOutlined className="menuFold" onClick={openMenu} />;
  }
  return (
    <>
      <Row wrap={false} className="global__container" align="middle" justify="space-between">
        <Col flex="1 1 0%">
          <img className="logo" src={logo} />
          {OpenIcon}
        </Col>
        <Col>
          <HeaderSearch />
        </Col>
        <Col className="icon">
          <QuestionCircleOutlined />
        </Col>
        <Dropdown overlay={MsgMenu} placement="bottomLeft">
          <Col className="icon">
            <BellOutlined />
          </Col>
        </Dropdown>
        <Dropdown overlay={AvatarMenu} placement="bottomCenter">
          <Col className="userProfile">
            <img className="avatar" src={avatar} />
            <span className="name">flynn-eye</span>
          </Col>
        </Dropdown>
        <Dropdown overlay={LangMenu} placement="bottomLeft">
          <Col className="icon">
            <TranslationOutlined />
          </Col>
        </Dropdown>
      </Row>
    </>
  );
};
const AvatarMenu = () => {
  return (
    <Menu>
      <Menu.Item>
        <a>退出登录</a>
      </Menu.Item>
      <Menu.Item>
        <a>个人资料</a>
      </Menu.Item>
    </Menu>
  );
};
const MsgMenu = () => {
  return (
    <Menu>
      <Menu.Item>
        <a>English</a>
      </Menu.Item>
      <Menu.Item>
        <a>中文</a>
      </Menu.Item>
    </Menu>
  );
};
const LangMenu = () => {
  return (
    <Menu>
      <Menu.Item>
        <a>English</a>
      </Menu.Item>
      <Menu.Item>
        <a>中文</a>
      </Menu.Item>
    </Menu>
  );
};
export default Header;
