import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import { HeaderOnly } from '../components/Layout';
import routesConfig from '~/config/routes';

const publicRoutes = [
    { path: routesConfig.home, element: <Home /> },
    { path: routesConfig.following, element: <Following /> },
    { path: routesConfig.profile, element: <Profile /> },
    { path: routesConfig.search, element: <Search /> },
    { path: routesConfig.upload, element: <Upload />, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
