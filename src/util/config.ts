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
export let config: IConfig = {
  layoutMode: ELayoutMode.left,
  fixHeader: true,
  theme: ETheme.dark,
  language: Elanguage.ch,
  showFooter: true
};
function initConfig() {
  let localconfig = localStorage.getItem('config');
  if (!localconfig || (localconfig && localconfig.length < 9)) {
    //undefined length 9
    localStorage.setItem('config', JSON.stringify(config));
    console.log(11);
  }
}
export function resetConfig() {
  localStorage.setItem('config', JSON.stringify(config));
}
export function getConfigFromLocalStorage(): IConfig {
  let localConfig = localStorage.getItem('config');
  if (localConfig) setConfig(JSON.parse(localConfig));
  return config;
}
function setConfig(localconfig: IConfig) {
  config = localconfig;
}
export default initConfig;
