import React, { FC, useState } from 'react';
import './index.scss';
import { Layout, Row } from 'antd';
import { IConfig } from '../../../util/config';
import FooterContent from '../../../components/footer';
import Menu from '../../../components/menu';
import logo from '../../../asserts/logo.svg';
const { Header, Footer, Sider, Content } = Layout;
interface ITitleStyle {
  display: string;
}
const LeftMenuLayout: FC<IConfig> = (props) => {
  const { layoutMode, fixHeader, theme, language, showFooter, children } = props;
  let [titleStyle, setTitleStyle] = useState({
    display: 'inline-block'
  });
  let changeTitleStatus = () => {
    console.log(titleStyle);
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
  return (
    <Layout className="LeftMenuLayout__container">
      <Sider
        onCollapse={() => changeTitleStatus()}
        breakpoint="md"
        collapsible={true}
        className="sider"
      >
        <Row justify="center" align="middle" className="sider__logo">
          <a>
            <img src={logo} alt="" />
            <h1 style={titleStyle}>ant design pro</h1>
          </a>
        </Row>
        <Menu language={language} theme={theme} layoutMode={layoutMode} fixHeader={fixHeader} />
      </Sider>
      <Layout>
        <Header className="header"></Header>
        <Content>Content</Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LeftMenuLayout;
