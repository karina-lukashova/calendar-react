import React from 'react';
import { Login } from '../pages/Login';
import { Event } from '../pages/Event';
import { Navigate } from 'react-router-dom';

interface IRoute {
  path: string;
  element: React.ReactNode;
  exact?: boolean;
};

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/',
  ANY = '*'
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.LOGIN,
    element: <Login />,
  },
  {
    path: RouteNames.ANY,
    element: <Navigate to={RouteNames.LOGIN} replace />,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.EVENT,
    element: <Event />,
  },
  {
    path: RouteNames.ANY,
    element: <Navigate to={RouteNames.EVENT} replace />,
  },
];