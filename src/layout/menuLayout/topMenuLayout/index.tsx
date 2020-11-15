import React, { FC } from 'react';
import './index.scss';
import { Layout } from 'antd';
import { IConfig } from '../../../util/config';
import FooterContent from '../../../components/footer';
import Menu from '../../../components/menu';
const { Header, Footer, Sider, Content } = Layout;
const TopMenuLayout: FC<IConfig> = (props) => {
  const { layoutMode, fixHeader, theme, language, showFooter, children } = props;
  return (
    <Layout className="toplayout__container">
      <Header>
        <Menu language={language} theme={theme} layoutMode={layoutMode} fixHeader={fixHeader} />
      </Header>
      <Content>Content</Content>
      <Footer>
        <FooterContent />
      </Footer>
    </Layout>
  );
};
export default TopMenuLayout;
