import React, { FC, Component } from 'react';
import './index.scss';
import { Menu as AMenu } from 'antd';
import { MenuMode } from 'antd/lib/menu';
import { MenuTheme } from 'antd/lib/menu/MenuContext';
import { ELayoutMode, ETheme, Elanguage } from '../../util/config';
import menuList, { IMenu } from '../../router/menuList';
import { useHistory } from 'react-router-dom';
interface IProps {
  layoutMode: ELayoutMode;
  fixHeader: Boolean;
  theme: ETheme;
  language: Elanguage;
}
const { Item, SubMenu } = AMenu;
const Menu: FC<IProps> = (props) => {
  const history = useHistory();
  const { layoutMode, fixHeader, theme, language } = props;
  const handleClick = (item: IMenu) => {
    history.push(item.path!);
  };
  const handleMenu = (menuList: IMenu[], key: number = 0): any[] => {
    return menuList.map((item, index) => {
      if ('children' in item) {
        return (
          <SubMenu
            key={key + '-' + item.name}
            icon={item.icon ? <item.icon /> : null}
            title={item.name}
          >
            {handleMenu(item.children!, key + 1)}
          </SubMenu>
        );
      } else {
        return (
          <AMenu.Item
            key={key + '-' + item.name + 'index'}
            icon={item.icon ? <item.icon /> : null}
            title={item.name}
            onClick={() => {
              handleClick(item);
            }}
          >
            {item.name}
          </AMenu.Item>
        );
      }
    });
  };
  let menuTheme: MenuTheme = 'dark';
  if (theme !== 'dark') {
    menuTheme = 'light';
  }
  let mode: MenuMode = layoutMode === 'top' ? 'horizontal' : 'inline';
  let menuClassName = 'menu__container-' + mode;
  return (
    <AMenu className={menuClassName} mode={mode} theme={menuTheme}>
      {handleMenu(menuList, 0)}
    </AMenu>
  );
};
export default Menu;
