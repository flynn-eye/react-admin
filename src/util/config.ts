import { Layout } from 'antd';
export interface IConfig {
  layoutMode: ELayoutMode;
  fixHeader: TFixHeader;
  theme: ETheme;
  language: Elanguage;
  showFooter: TShowFooter;
}
export enum ELayoutMode {
  top = 'top',
  left = 'left'
}
type TFixHeader = true | false;
type TShowFooter = true | false;
export enum ETheme {
  dark = 'dark',
  white = 'white'
}
export enum Elanguage {
  en = 'english',
  ch = 'chinese'
}
let config: IConfig = {
  layoutMode: ELayoutMode.top,
  fixHeader: true,
  theme: ETheme.dark,
  language: Elanguage.ch,
  showFooter: true
};
export default config;
