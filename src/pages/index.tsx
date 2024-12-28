import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Settings = lazy(() => import('./Settings'));
const NotFound = lazy(() => import('./NotFound'));

export { Home, NotFound, Settings };
