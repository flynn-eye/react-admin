import React from 'react';
import './index.scss';
import LeftMenuLayout from './leftMenuLayout';
import TopMenuLayout from './topMenuLayout';
import { IConfig, config } from '../../util/config';
const MenuLayout = () => {
  const localConfig = localStorage.getItem('config');
  let configObj: IConfig = config;
  if (localConfig) {
    configObj = JSON.parse(localConfig!);
  }
  let { layoutMode } = configObj;
  if (layoutMode === 'top') {
    return <TopMenuLayout {...configObj} />;
  } else {
    return <LeftMenuLayout {...configObj} />;
  }
};
export default MenuLayout;
