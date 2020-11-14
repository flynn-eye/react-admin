import { Layout } from 'antd';
export interface IConfig {
  layoutMode: ELayoutMode;
  fixHeader: TFixHeader;
  theme: ETheme;
  language: Elanguage;
}
export enum ELayoutMode {
  top = 'top',
  left = 'left'
}
type TFixHeader = true | false;
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
  language: Elanguage.ch
};
export default config;
