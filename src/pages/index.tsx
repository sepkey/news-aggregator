import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Settings = lazy(() => import('./Settings'));
const NotFound = lazy(() => import('./NotFound'));
const Error = lazy(() => import('./Error'));

export { Error, Home, NotFound, Settings };
