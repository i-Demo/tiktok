import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import { HeaderOnly } from '~/layouts';
import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, element: <Home /> },
    { path: config.routes.following, element: <Following /> },
    { path: config.routes.profile, element: <Profile /> },
    { path: config.routes.search, element: <Search /> },
    { path: config.routes.upload, element: <Upload />, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
