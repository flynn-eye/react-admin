import { lazy, LazyExoticComponent, FunctionComponent } from 'react';
const DashBoard = lazy(() => import('../pages/dashBoard'));
const Error403 = lazy(() => import('../pages/error/403'));
const Error404 = lazy(() => import('../pages/error/404'));
const MenuLayout = lazy(() => import('../layout/menuLayout/index'));
const Map = lazy(() => import('../pages/map/index'));
export interface IRoute {
  path: string;
  role: string[];
  component: LazyExoticComponent<FunctionComponent>;
  layout: LazyExoticComponent<FunctionComponent>;
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
    layout: MenuLayout,
    role: [ERole.tour, ERole.admin, ERole.user]
  },
  {
    path: '/worldMap',
    component: Map,
    layout: MenuLayout,
    role: [ERole.tour, ERole.admin, ERole.user]
  }
];
export const errorRoutes: IRoute[] = [
  {
    path: '/error/403',
    role: [ERole.tour, ERole.admin, ERole.user],
    layout: MenuLayout,
    component: Error403
  },
  {
    path: '/error/404',
    role: [ERole.tour, ERole.admin, ERole.user],
    layout: MenuLayout,
    component: Error404
  }
];
export default routes;
