import { DashboardOutlined, WarningOutlined, FormOutlined, UserOutlined } from '@ant-design/icons';
export interface IMenu {
  name: string;
  children?: IMenu[];
  icon?: any;
  path?: string;
}
const menuList: IMenu[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: DashboardOutlined
  },
  {
    name: '布局',
    path: '/menuLayout',
    icon: UserOutlined
  },
  {
    name: '异常',
    icon: WarningOutlined,
    children: [
      {
        name: '403',
        path: '/error/403'
      },
      {
        name: '404',
        path: '/error/404'
      }
    ]
  },
  {
    name: '三级表',
    icon: FormOutlined,
    children: [
      {
        name: '403',
        path: '/error/403',
        children: [
          {
            name: '403',
            path: '/error/403'
          },
          {
            name: '404',
            path: '/error/404'
          }
        ]
      },
      {
        name: '404',
        path: '/error/404'
      }
    ]
  }
];
export default menuList;
