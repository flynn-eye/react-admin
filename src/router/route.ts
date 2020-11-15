import { lazy, LazyExoticComponent, FunctionComponent } from 'react';
const DashBoard = lazy(() => import('../pages/dashBoard'));
const Error403 = lazy(() => import('../pages/error/403'));
const Error404 = lazy(() => import('../pages/error/404'));
const MenuLayout = lazy(() => import('../layout/menuLayout/index'));

export interface IRoute {
  path: string;
  role: string[];
  component?: LazyExoticComponent<FunctionComponent>;
}

export enum ERole {
  tour = 'tour',
  admin = 'admin',
  user = 'user'
}
let routes: IRoute[] = [
  {
    path: '/dashboard',
    component: DashBoard,
    role: [ERole.tour, ERole.admin, ERole.user]
  },
  {
    path: '/menuLayout',
    component: MenuLayout,
    role: [ERole.tour, ERole.admin, ERole.user]
  }
];
export const errorRoutes: IRoute[] = [
  {
    path: '/error/403',
    role: [ERole.tour, ERole.admin, ERole.user],
    component: Error403
  },
  {
    path: '/error/404',
    role: [ERole.tour, ERole.admin, ERole.user],
    component: Error404
  }
];
export default routes;
