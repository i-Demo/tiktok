import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import { HeaderOnly } from '../components/Layout';

const publicRoutes = [
    { path: '/', element: <Home /> },
    { path: '/following', element: <Following /> },
    { path: '/profile', element: <Profile /> },
    { path: '/search', element: <Search /> },
    { path: '/upload', element: <Upload />, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
