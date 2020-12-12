import React, { FC } from 'react';
import './index.scss';
import LeftMenuLayout from './leftMenuLayout';
import TopMenuLayout from './topMenuLayout';
import { IConfig, config } from '../../util/config';
const MenuLayout: FC = (props) => {
  const localConfig = localStorage.getItem('config');
  let configObj: IConfig = config;
  if (localConfig) {
    configObj = JSON.parse(localConfig!);
  }
  let { layoutMode } = configObj;
  if (layoutMode === 'top') {
    return <TopMenuLayout {...configObj}>{props.children}</TopMenuLayout>;
  } else {
    return <LeftMenuLayout {...configObj}>{props.children}</LeftMenuLayout>;
  }
};
export default MenuLayout;
