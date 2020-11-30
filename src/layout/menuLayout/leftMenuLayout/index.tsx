import React, { FC, useState } from 'react';
import './index.scss';
import { Layout, Row, Drawer } from 'antd';
import { IConfig } from '../../../util/config';
import FooterContent from '../../../components/footer';
import Menu from '../../../components/menu';
import logo from '../../../asserts/logo.svg';
import GlobalHeader from '../../../components/header';
const { Header, Footer, Sider, Content } = Layout;
interface ITitleStyle {
  display: string;
}
const LeftMenuLayout: FC<IConfig> = (props) => {
  const { layoutMode, fixHeader, theme, language } = props;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [titleStyle, setTitleStyle] = useState({
    display: 'inline-block'
  });
  const [isCollapsed, setCollapsed] = useState<boolean>(false);
  const [isMobile, setMobileStatus] = useState<boolean>(true);
  let changeTitleStatus = () => {
    if (titleStyle.display === 'none') {
      setTitleStyle({
        display: 'inline-block'
      });
    } else {
      setTitleStyle({
        display: 'none'
      });
    }
  };
  const handleCollapse: () => void = () => {
    changeTitleStatus();
    setCollapsed(!isCollapsed);
  };
  const XSider = (
    <Sider
      onCollapse={() => changeTitleStatus()}
      breakpoint="md"
      collapsible={true}
      collapsed={isCollapsed}
      className="siderShow sider"
      onBreakpoint={() => {
        setMobileStatus(!isMobile);
      }}
      trigger={null}
    >
      <Row justify="center" align="middle" className="sider__logo">
        <a>
          <img src={logo} alt="" />
          <h1 style={titleStyle}>ant design pro</h1>
        </a>
      </Row>
      <Menu language={language} theme={theme} layoutMode={layoutMode} fixHeader={fixHeader} />
    </Sider>
  );
  const DrawerSider = (
    <div className="LeftMenuLayout__container">
      <Sider
        trigger={null}
        onCollapse={() => changeTitleStatus()}
        collapsible={true}
        className="sider"
      >
        <Row justify="center" align="middle" className="sider__logo">
          <a>
            <img src={logo} alt="" />
            <h1>ant design pro</h1>
          </a>
        </Row>
        <Menu language={language} theme={theme} layoutMode={layoutMode} fixHeader={fixHeader} />
      </Sider>
    </div>
  );
  return (
    <>
      <Layout className="LeftMenuLayout__container">
        {XSider}
        <Layout>
          <Header className="header">
            <GlobalHeader
              handleCollapsed={handleCollapse}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              isMobile={isMobile}
            />
          </Header>
          <Content>Content</Content>
          <Footer>
            <FooterContent />
          </Footer>
        </Layout>
      </Layout>
      <Drawer
        headerStyle={{ display: 'none' }}
        placement="left"
        closable={false}
        onClose={() => {
          setIsMenuOpen(false);
        }}
        visible={isMenuOpen}
        width="200"
        bodyStyle={{ padding: 0 }}
      >
        {DrawerSider}
      </Drawer>
    </>
  );
};
export default LeftMenuLayout;
